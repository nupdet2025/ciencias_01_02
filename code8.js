gdjs.main7Code = {};
gdjs.main7Code.localVariables = [];
gdjs.main7Code.GDbackObjects1= [];
gdjs.main7Code.GDbackObjects2= [];
gdjs.main7Code.GDbackObjects3= [];
gdjs.main7Code.GDcursorObjects1= [];
gdjs.main7Code.GDcursorObjects2= [];
gdjs.main7Code.GDcursorObjects3= [];
gdjs.main7Code.GDboy3Objects1= [];
gdjs.main7Code.GDboy3Objects2= [];
gdjs.main7Code.GDboy3Objects3= [];
gdjs.main7Code.GDfadeObjects1= [];
gdjs.main7Code.GDfadeObjects2= [];
gdjs.main7Code.GDfadeObjects3= [];
gdjs.main7Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main7Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main7Code.GDBasicExplosionEnergySparksObjects3= [];
gdjs.main7Code.GDbtn8Objects1= [];
gdjs.main7Code.GDbtn8Objects2= [];
gdjs.main7Code.GDbtn8Objects3= [];
gdjs.main7Code.GDbtn_9595goObjects1= [];
gdjs.main7Code.GDbtn_9595goObjects2= [];
gdjs.main7Code.GDbtn_9595goObjects3= [];


gdjs.main7Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 2);
}}

}


};gdjs.main7Code.mapOfGDgdjs_9546main7Code_9546GDbtn_95959595goObjects1Objects = Hashtable.newFrom({"btn_go": gdjs.main7Code.GDbtn_9595goObjects1});
gdjs.main7Code.asyncCallback12111060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main7Code.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final", false);
}gdjs.main7Code.localVariables.length = 0;
}
gdjs.main7Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main7Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main7Code.asyncCallback12111060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main7Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main7Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main7Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.main7Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main7Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main7Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main7Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}
{ //Subevents
gdjs.main7Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main7Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main7Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main7Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main7Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main7Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_go"), gdjs.main7Code.GDbtn_9595goObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.main7Code.mapOfGDgdjs_9546main7Code_9546GDbtn_95959595goObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12110260);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.main7Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.main7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main7Code.GDbackObjects1.length = 0;
gdjs.main7Code.GDbackObjects2.length = 0;
gdjs.main7Code.GDbackObjects3.length = 0;
gdjs.main7Code.GDcursorObjects1.length = 0;
gdjs.main7Code.GDcursorObjects2.length = 0;
gdjs.main7Code.GDcursorObjects3.length = 0;
gdjs.main7Code.GDboy3Objects1.length = 0;
gdjs.main7Code.GDboy3Objects2.length = 0;
gdjs.main7Code.GDboy3Objects3.length = 0;
gdjs.main7Code.GDfadeObjects1.length = 0;
gdjs.main7Code.GDfadeObjects2.length = 0;
gdjs.main7Code.GDfadeObjects3.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main7Code.GDbtn8Objects1.length = 0;
gdjs.main7Code.GDbtn8Objects2.length = 0;
gdjs.main7Code.GDbtn8Objects3.length = 0;
gdjs.main7Code.GDbtn_9595goObjects1.length = 0;
gdjs.main7Code.GDbtn_9595goObjects2.length = 0;
gdjs.main7Code.GDbtn_9595goObjects3.length = 0;

gdjs.main7Code.eventsList2(runtimeScene);
gdjs.main7Code.GDbackObjects1.length = 0;
gdjs.main7Code.GDbackObjects2.length = 0;
gdjs.main7Code.GDbackObjects3.length = 0;
gdjs.main7Code.GDcursorObjects1.length = 0;
gdjs.main7Code.GDcursorObjects2.length = 0;
gdjs.main7Code.GDcursorObjects3.length = 0;
gdjs.main7Code.GDboy3Objects1.length = 0;
gdjs.main7Code.GDboy3Objects2.length = 0;
gdjs.main7Code.GDboy3Objects3.length = 0;
gdjs.main7Code.GDfadeObjects1.length = 0;
gdjs.main7Code.GDfadeObjects2.length = 0;
gdjs.main7Code.GDfadeObjects3.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main7Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main7Code.GDbtn8Objects1.length = 0;
gdjs.main7Code.GDbtn8Objects2.length = 0;
gdjs.main7Code.GDbtn8Objects3.length = 0;
gdjs.main7Code.GDbtn_9595goObjects1.length = 0;
gdjs.main7Code.GDbtn_9595goObjects2.length = 0;
gdjs.main7Code.GDbtn_9595goObjects3.length = 0;


return;

}

gdjs['main7Code'] = gdjs.main7Code;
