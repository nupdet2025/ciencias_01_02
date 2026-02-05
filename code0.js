gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDNewSpriteObjects1= [];
gdjs.introCode.GDNewSpriteObjects2= [];
gdjs.introCode.GDNewSpriteObjects3= [];
gdjs.introCode.GDNewSprite2Objects1= [];
gdjs.introCode.GDNewSprite2Objects2= [];
gdjs.introCode.GDNewSprite2Objects3= [];
gdjs.introCode.GDbtn_9595goObjects1= [];
gdjs.introCode.GDbtn_9595goObjects2= [];
gdjs.introCode.GDbtn_9595goObjects3= [];
gdjs.introCode.GDcursorObjects1= [];
gdjs.introCode.GDcursorObjects2= [];
gdjs.introCode.GDcursorObjects3= [];
gdjs.introCode.GDfadeObjects1= [];
gdjs.introCode.GDfadeObjects2= [];
gdjs.introCode.GDfadeObjects3= [];
gdjs.introCode.GDbtn_9595replayObjects1= [];
gdjs.introCode.GDbtn_9595replayObjects2= [];
gdjs.introCode.GDbtn_9595replayObjects3= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Comedy-Background-_Loop-1_.mp3", 1, false, 20, 1);
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


};gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595goObjects1Objects = Hashtable.newFrom({"btn_go": gdjs.introCode.GDbtn_9595goObjects1});
gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.introCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.introCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_go"), gdjs.introCode.GDbtn_9595goObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595goObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro2", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.introCode.GDbtn_9595replayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDbtn_9595replayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDbtn_9595replayObjects1[k] = gdjs.introCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDNewSpriteObjects1.length = 0;
gdjs.introCode.GDNewSpriteObjects2.length = 0;
gdjs.introCode.GDNewSpriteObjects3.length = 0;
gdjs.introCode.GDNewSprite2Objects1.length = 0;
gdjs.introCode.GDNewSprite2Objects2.length = 0;
gdjs.introCode.GDNewSprite2Objects3.length = 0;
gdjs.introCode.GDbtn_9595goObjects1.length = 0;
gdjs.introCode.GDbtn_9595goObjects2.length = 0;
gdjs.introCode.GDbtn_9595goObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;
gdjs.introCode.GDbtn_9595replayObjects1.length = 0;
gdjs.introCode.GDbtn_9595replayObjects2.length = 0;
gdjs.introCode.GDbtn_9595replayObjects3.length = 0;

gdjs.introCode.eventsList1(runtimeScene);
gdjs.introCode.GDNewSpriteObjects1.length = 0;
gdjs.introCode.GDNewSpriteObjects2.length = 0;
gdjs.introCode.GDNewSpriteObjects3.length = 0;
gdjs.introCode.GDNewSprite2Objects1.length = 0;
gdjs.introCode.GDNewSprite2Objects2.length = 0;
gdjs.introCode.GDNewSprite2Objects3.length = 0;
gdjs.introCode.GDbtn_9595goObjects1.length = 0;
gdjs.introCode.GDbtn_9595goObjects2.length = 0;
gdjs.introCode.GDbtn_9595goObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;
gdjs.introCode.GDbtn_9595replayObjects1.length = 0;
gdjs.introCode.GDbtn_9595replayObjects2.length = 0;
gdjs.introCode.GDbtn_9595replayObjects3.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
