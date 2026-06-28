sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zsalesorderfioriapp.controller.View1", {
        onInit() {
            gaBusy.open();
            setTimeout(() => {
                gaBusy.close();
            }, 5000);
        }
    });
});