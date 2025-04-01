gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.GDNewSpriteObjects1= [];
gdjs.finalCode.GDNewSpriteObjects2= [];
gdjs.finalCode.GDNewSpriteObjects3= [];
gdjs.finalCode.GDblock4Objects1= [];
gdjs.finalCode.GDblock4Objects2= [];
gdjs.finalCode.GDblock4Objects3= [];
gdjs.finalCode.GDcursorObjects1= [];
gdjs.finalCode.GDcursorObjects2= [];
gdjs.finalCode.GDcursorObjects3= [];
gdjs.finalCode.GDButton_9595noObjects1= [];
gdjs.finalCode.GDButton_9595noObjects2= [];
gdjs.finalCode.GDButton_9595noObjects3= [];
gdjs.finalCode.GDButton_9595yesObjects1= [];
gdjs.finalCode.GDButton_9595yesObjects2= [];
gdjs.finalCode.GDButton_9595yesObjects3= [];
gdjs.finalCode.GDfadeObjects1= [];
gdjs.finalCode.GDfadeObjects2= [];
gdjs.finalCode.GDfadeObjects3= [];


gdjs.finalCode.asyncCallback17780660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\victory.mp3", 3, false, 70, 1);
}gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.finalCode.asyncCallback17780660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs.finalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}}

}


};gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDButton_95959595yesObjects1Objects = Hashtable.newFrom({"Button_yes": gdjs.finalCode.GDButton_9595yesObjects1});
gdjs.finalCode.asyncCallback17785524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", true);
}gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.finalCode.asyncCallback17785524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDButton_95959595noObjects1Objects = Hashtable.newFrom({"Button_no": gdjs.finalCode.GDButton_9595noObjects1});
gdjs.finalCode.userFunc0xd57c30 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "https://sesiescolas.fiemg.com.br/";
//window.top.location.href = "https://sesiescolas.fiemg.com.br/";

};
gdjs.finalCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


gdjs.finalCode.userFunc0xd57c30(runtimeScene);

}


};gdjs.finalCode.asyncCallback17787828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.finalCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.finalCode.asyncCallback17787828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.finalCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}
{ //Subevents
gdjs.finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_yes"), gdjs.finalCode.GDButton_9595yesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDButton_95959595yesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17784740);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 3, 0, 0.5);
}
{ //Subevents
gdjs.finalCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_no"), gdjs.finalCode.GDButton_9595noObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDButton_95959595noObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17787132);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 3, 0, 0.5);
}
{ //Subevents
gdjs.finalCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDNewSpriteObjects1.length = 0;
gdjs.finalCode.GDNewSpriteObjects2.length = 0;
gdjs.finalCode.GDNewSpriteObjects3.length = 0;
gdjs.finalCode.GDblock4Objects1.length = 0;
gdjs.finalCode.GDblock4Objects2.length = 0;
gdjs.finalCode.GDblock4Objects3.length = 0;
gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDButton_9595noObjects1.length = 0;
gdjs.finalCode.GDButton_9595noObjects2.length = 0;
gdjs.finalCode.GDButton_9595noObjects3.length = 0;
gdjs.finalCode.GDButton_9595yesObjects1.length = 0;
gdjs.finalCode.GDButton_9595yesObjects2.length = 0;
gdjs.finalCode.GDButton_9595yesObjects3.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;

gdjs.finalCode.eventsList5(runtimeScene);
gdjs.finalCode.GDNewSpriteObjects1.length = 0;
gdjs.finalCode.GDNewSpriteObjects2.length = 0;
gdjs.finalCode.GDNewSpriteObjects3.length = 0;
gdjs.finalCode.GDblock4Objects1.length = 0;
gdjs.finalCode.GDblock4Objects2.length = 0;
gdjs.finalCode.GDblock4Objects3.length = 0;
gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDButton_9595noObjects1.length = 0;
gdjs.finalCode.GDButton_9595noObjects2.length = 0;
gdjs.finalCode.GDButton_9595noObjects3.length = 0;
gdjs.finalCode.GDButton_9595yesObjects1.length = 0;
gdjs.finalCode.GDButton_9595yesObjects2.length = 0;
gdjs.finalCode.GDButton_9595yesObjects3.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
