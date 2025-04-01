gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDbackObjects1= [];
gdjs.mainCode.GDbackObjects2= [];
gdjs.mainCode.GDbackObjects3= [];
gdjs.mainCode.GDcursorObjects1= [];
gdjs.mainCode.GDcursorObjects2= [];
gdjs.mainCode.GDcursorObjects3= [];
gdjs.mainCode.GDboy2Objects1= [];
gdjs.mainCode.GDboy2Objects2= [];
gdjs.mainCode.GDboy2Objects3= [];
gdjs.mainCode.GDverObjects1= [];
gdjs.mainCode.GDverObjects2= [];
gdjs.mainCode.GDverObjects3= [];
gdjs.mainCode.GDbocaObjects1= [];
gdjs.mainCode.GDbocaObjects2= [];
gdjs.mainCode.GDbocaObjects3= [];
gdjs.mainCode.GDolhosObjects1= [];
gdjs.mainCode.GDolhosObjects2= [];
gdjs.mainCode.GDolhosObjects3= [];
gdjs.mainCode.GDnarizObjects1= [];
gdjs.mainCode.GDnarizObjects2= [];
gdjs.mainCode.GDnarizObjects3= [];
gdjs.mainCode.GDcheck_9595areaObjects1= [];
gdjs.mainCode.GDcheck_9595areaObjects2= [];
gdjs.mainCode.GDcheck_9595areaObjects3= [];
gdjs.mainCode.GDfadeObjects1= [];
gdjs.mainCode.GDfadeObjects2= [];
gdjs.mainCode.GDfadeObjects3= [];
gdjs.mainCode.GDBasicExplosionEnergySparksObjects1= [];
gdjs.mainCode.GDBasicExplosionEnergySparksObjects2= [];
gdjs.mainCode.GDBasicExplosionEnergySparksObjects3= [];


gdjs.mainCode.eventsList0 = function(runtimeScene) {

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
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Rainbow Forest - Quincas Moreira.mp3", 2, false, 70, 1);
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDolhosObjects1Objects = Hashtable.newFrom({"olhos": gdjs.mainCode.GDolhosObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.mainCode.GDcheck_9595areaObjects1});
gdjs.mainCode.asyncCallback17514900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main2", false);
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.mainCode.asyncCallback17514900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback17514284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.mainCode.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.mainCode.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mainCode.asyncCallback17514284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbocaObjects1Objects = Hashtable.newFrom({"boca": gdjs.mainCode.GDbocaObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.mainCode.GDcheck_9595areaObjects1});
gdjs.mainCode.asyncCallback17518348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("boca"), gdjs.mainCode.GDbocaObjects2);

{for(var i = 0, len = gdjs.mainCode.GDbocaObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
for (const obj of gdjs.mainCode.GDbocaObjects1) asyncObjectsList.addObject("boca", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.mainCode.asyncCallback17518348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDnarizObjects1Objects = Hashtable.newFrom({"nariz": gdjs.mainCode.GDnarizObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.mainCode.GDcheck_9595areaObjects1});
gdjs.mainCode.asyncCallback17522700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("nariz"), gdjs.mainCode.GDnarizObjects2);

{for(var i = 0, len = gdjs.mainCode.GDnarizObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
for (const obj of gdjs.mainCode.GDnarizObjects1) asyncObjectsList.addObject("nariz", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.mainCode.asyncCallback17522700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.mainCode.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.mainCode.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.mainCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.mainCode.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.mainCode.GDnarizObjects1);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.mainCode.GDolhosObjects1);
{for(var i = 0, len = gdjs.mainCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.mainCode.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.mainCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.mainCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.mainCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.mainCode.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.mainCode.GDolhosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDolhosObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17510588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.mainCode.GDbocaObjects1);
/* Reuse gdjs.mainCode.GDcheck_9595areaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.mainCode.GDnarizObjects1);
/* Reuse gdjs.mainCode.GDolhosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 54, 74, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDolhosObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDolhosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.mainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.mainCode.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.mainCode.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbocaObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17515748);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbocaObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbocaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbocaObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.mainCode.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.mainCode.GDnarizObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDnarizObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17519812);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDnarizObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDnarizObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDnarizObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDbackObjects1.length = 0;
gdjs.mainCode.GDbackObjects2.length = 0;
gdjs.mainCode.GDbackObjects3.length = 0;
gdjs.mainCode.GDcursorObjects1.length = 0;
gdjs.mainCode.GDcursorObjects2.length = 0;
gdjs.mainCode.GDcursorObjects3.length = 0;
gdjs.mainCode.GDboy2Objects1.length = 0;
gdjs.mainCode.GDboy2Objects2.length = 0;
gdjs.mainCode.GDboy2Objects3.length = 0;
gdjs.mainCode.GDverObjects1.length = 0;
gdjs.mainCode.GDverObjects2.length = 0;
gdjs.mainCode.GDverObjects3.length = 0;
gdjs.mainCode.GDbocaObjects1.length = 0;
gdjs.mainCode.GDbocaObjects2.length = 0;
gdjs.mainCode.GDbocaObjects3.length = 0;
gdjs.mainCode.GDolhosObjects1.length = 0;
gdjs.mainCode.GDolhosObjects2.length = 0;
gdjs.mainCode.GDolhosObjects3.length = 0;
gdjs.mainCode.GDnarizObjects1.length = 0;
gdjs.mainCode.GDnarizObjects2.length = 0;
gdjs.mainCode.GDnarizObjects3.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects1.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects2.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects3.length = 0;
gdjs.mainCode.GDfadeObjects1.length = 0;
gdjs.mainCode.GDfadeObjects2.length = 0;
gdjs.mainCode.GDfadeObjects3.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects3.length = 0;

gdjs.mainCode.eventsList5(runtimeScene);
gdjs.mainCode.GDbackObjects1.length = 0;
gdjs.mainCode.GDbackObjects2.length = 0;
gdjs.mainCode.GDbackObjects3.length = 0;
gdjs.mainCode.GDcursorObjects1.length = 0;
gdjs.mainCode.GDcursorObjects2.length = 0;
gdjs.mainCode.GDcursorObjects3.length = 0;
gdjs.mainCode.GDboy2Objects1.length = 0;
gdjs.mainCode.GDboy2Objects2.length = 0;
gdjs.mainCode.GDboy2Objects3.length = 0;
gdjs.mainCode.GDverObjects1.length = 0;
gdjs.mainCode.GDverObjects2.length = 0;
gdjs.mainCode.GDverObjects3.length = 0;
gdjs.mainCode.GDbocaObjects1.length = 0;
gdjs.mainCode.GDbocaObjects2.length = 0;
gdjs.mainCode.GDbocaObjects3.length = 0;
gdjs.mainCode.GDolhosObjects1.length = 0;
gdjs.mainCode.GDolhosObjects2.length = 0;
gdjs.mainCode.GDolhosObjects3.length = 0;
gdjs.mainCode.GDnarizObjects1.length = 0;
gdjs.mainCode.GDnarizObjects2.length = 0;
gdjs.mainCode.GDnarizObjects3.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects1.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects2.length = 0;
gdjs.mainCode.GDcheck_9595areaObjects3.length = 0;
gdjs.mainCode.GDfadeObjects1.length = 0;
gdjs.mainCode.GDfadeObjects2.length = 0;
gdjs.mainCode.GDfadeObjects3.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.mainCode.GDBasicExplosionEnergySparksObjects3.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
