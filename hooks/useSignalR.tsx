import { useEffect, useRef, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";

interface ISignalROptions {
  url: string;
  invoke?: { methodName: string; args: any[] };
}

export const useSignalR = (
  { url, invoke }: ISignalROptions,
  callbacks: { methodName: string; callback: () => void }[]
) => {
  const [enabled, setEnabled] = useState(false);
  const connection = useRef<HubConnection>();

  const start = async () => {
    if (connection.current!.state === HubConnectionState.Disconnected) {
      await connection.current!.start();

      setEnabled(true);
    }
  };

  const stop = async () => {
    if (connection.current!.state === HubConnectionState.Connected) {
      await connection.current!.stop();

      setEnabled(false);
    }
  };

  useEffect(() => {
    (async () => {
      connection.current = new HubConnectionBuilder()
        .withUrl(url, {
          withCredentials: false,
        })
        .withAutomaticReconnect()
        .build();

      callbacks.forEach(({ methodName, callback }) => {
        connection.current!.on(methodName, () => {
          callback();
        });
      });

      if (invoke) {
        await connection.current.start().then(() => {
          connection.current!.invoke(invoke.methodName, ...invoke.args);
        });
      }

      return () => {
        stop();
      };
    })();
  }, []);

  return {
    enabled: enabled,
    start: start,
    stop: stop,
  };
};
