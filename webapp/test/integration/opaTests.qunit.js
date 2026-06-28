/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zsalesorderfioriapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
