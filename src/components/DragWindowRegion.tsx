import React, { ReactNode } from "react";

interface DragWindowRegionProps {
  title?: ReactNode;
}

export default function DragWindowRegion({ title }: DragWindowRegionProps) {
  function minimize() {
    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("winMinimize");
  }
  function maximize() {
    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("winMaximize");
  }
  function close() {
    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("winClose");
  }

  return (
    <div
      id="drag-window-region"
      className="flex flex-row-reverse items-stretch w-screen"
    >
      <div className="flex">
        <button
          title="Minimize"
          className="p-2 hover:bg-slate-300"
          onClick={minimize}
        >
          <svg
            aria-hidden="true"
            role="img"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
          </svg>
        </button>
        <button
          title="Maximize"
          className="p-2 hover:bg-slate-300"
          onClick={maximize}
        >
          <svg
            aria-hidden="true"
            role="img"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <rect
              width="9"
              height="9"
              x="1.5"
              y="1.5"
              fill="none"
              stroke="currentColor"
            ></rect>
          </svg>
        </button>
        <button
          type="button"
          title="Close"
          className="p-2 hover:bg-red-300"
          onClick={close}
        >
          <svg
            aria-hidden="true"
            role="img"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <polygon
              fill="currentColor"
              fill-rule="evenodd"
              points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
            ></polygon>
          </svg>
        </button>
      </div>
      <div className="draglayer w-full" />
      {title && (
        <div className="flex-1 flex items-center justify-center p-2">
          {title}
        </div>
      )}
    </div>
  );
}
