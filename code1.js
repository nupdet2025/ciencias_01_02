gdjs.intro2Code = {};
gdjs.intro2Code.localVariables = [];
gdjs.intro2Code.GDNewSpriteObjects1= [];
gdjs.intro2Code.GDNewSpriteObjects2= [];
gdjs.intro2Code.GDNewSpriteObjects3= [];
gdjs.intro2Code.GDblock2Objects1= [];
gdjs.intro2Code.GDblock2Objects2= [];
gdjs.intro2Code.GDblock2Objects3= [];
gdjs.intro2Code.GDcursorObjects1= [];
gdjs.intro2Code.GDcursorObjects2= [];
gdjs.intro2Code.GDcursorObjects3= [];
gdjs.intro2Code.GDplayObjects1= [];
gdjs.intro2Code.GDplayObjects2= [];
gdjs.intro2Code.GDplayObjects3= [];
gdjs.intro2Code.GDfadeObjects1= [];
gdjs.intro2Code.GDfadeObjects2= [];
gdjs.intro2Code.GDfadeObjects3= [];


gdjs.intro2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.intro2Code.mapOfGDgdjs_9546intro2Code_9546GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.intro2Code.GDplayObjects1});
gdjs.intro2Code.asyncCallback17479316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.intro2Code.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", true);
}gdjs.intro2Code.localVariables.length = 0;
}
gdjs.intro2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.intro2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.intro2Code.asyncCallback17479316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.intro2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro2Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.intro2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.intro2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}
{ //Subevents
gdjs.intro2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.intro2Code.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.intro2Code.mapOfGDgdjs_9546intro2Code_9546GDplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17478724);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 0.5);
}
{ //Subevents
gdjs.intro2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.intro2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.intro2Code.GDNewSpriteObjects3.length = 0;
gdjs.intro2Code.GDblock2Objects1.length = 0;
gdjs.intro2Code.GDblock2Objects2.length = 0;
gdjs.intro2Code.GDblock2Objects3.length = 0;
gdjs.intro2Code.GDcursorObjects1.length = 0;
gdjs.intro2Code.GDcursorObjects2.length = 0;
gdjs.intro2Code.GDcursorObjects3.length = 0;
gdjs.intro2Code.GDplayObjects1.length = 0;
gdjs.intro2Code.GDplayObjects2.length = 0;
gdjs.intro2Code.GDplayObjects3.length = 0;
gdjs.intro2Code.GDfadeObjects1.length = 0;
gdjs.intro2Code.GDfadeObjects2.length = 0;
gdjs.intro2Code.GDfadeObjects3.length = 0;

gdjs.intro2Code.eventsList2(runtimeScene);
gdjs.intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.intro2Code.GDNewSpriteObjects3.length = 0;
gdjs.intro2Code.GDblock2Objects1.length = 0;
gdjs.intro2Code.GDblock2Objects2.length = 0;
gdjs.intro2Code.GDblock2Objects3.length = 0;
gdjs.intro2Code.GDcursorObjects1.length = 0;
gdjs.intro2Code.GDcursorObjects2.length = 0;
gdjs.intro2Code.GDcursorObjects3.length = 0;
gdjs.intro2Code.GDplayObjects1.length = 0;
gdjs.intro2Code.GDplayObjects2.length = 0;
gdjs.intro2Code.GDplayObjects3.length = 0;
gdjs.intro2Code.GDfadeObjects1.length = 0;
gdjs.intro2Code.GDfadeObjects2.length = 0;
gdjs.intro2Code.GDfadeObjects3.length = 0;


return;

}

gdjs['intro2Code'] = gdjs.intro2Code;
