import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";

export default function PopupDoc() {
  const menuLeft = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Export",
          icon: "pi pi-upload",
        },
      ],
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
      <Button
        label="Menu"
        icon="pi pi-align-left"
        className="mr-2"
        // @ts-ignore
        onClick={(event) => menuLeft.current.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
    </div>
  );
}
