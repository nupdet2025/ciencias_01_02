gdjs.main3Code = {};
gdjs.main3Code.localVariables = [];
gdjs.main3Code.GDbackObjects1= [];
gdjs.main3Code.GDbackObjects2= [];
gdjs.main3Code.GDbackObjects3= [];
gdjs.main3Code.GDcursorObjects1= [];
gdjs.main3Code.GDcursorObjects2= [];
gdjs.main3Code.GDcursorObjects3= [];
gdjs.main3Code.GDboy4Objects1= [];
gdjs.main3Code.GDboy4Objects2= [];
gdjs.main3Code.GDboy4Objects3= [];
gdjs.main3Code.GDfalarObjects1= [];
gdjs.main3Code.GDfalarObjects2= [];
gdjs.main3Code.GDfalarObjects3= [];
gdjs.main3Code.GDmaosObjects1= [];
gdjs.main3Code.GDmaosObjects2= [];
gdjs.main3Code.GDmaosObjects3= [];
gdjs.main3Code.GDbocaObjects1= [];
gdjs.main3Code.GDbocaObjects2= [];
gdjs.main3Code.GDbocaObjects3= [];
gdjs.main3Code.GDnarizObjects1= [];
gdjs.main3Code.GDnarizObjects2= [];
gdjs.main3Code.GDnarizObjects3= [];
gdjs.main3Code.GDcheck_9595areaObjects1= [];
gdjs.main3Code.GDcheck_9595areaObjects2= [];
gdjs.main3Code.GDcheck_9595areaObjects3= [];
gdjs.main3Code.GDfadeObjects1= [];
gdjs.main3Code.GDfadeObjects2= [];
gdjs.main3Code.GDfadeObjects3= [];
gdjs.main3Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main3Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main3Code.GDBasicExplosionEnergySparksObjects3= [];


gdjs.main3Code.eventsList0 = function(runtimeScene) {

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


};gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDbocaObjects1Objects = Hashtable.newFrom({"boca": gdjs.main3Code.GDbocaObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main3Code.GDcheck_9595areaObjects1});
gdjs.main3Code.asyncCallback16901676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main4", false);
}gdjs.main3Code.localVariables.length = 0;
}
gdjs.main3Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.main3Code.asyncCallback16901676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main3Code.asyncCallback16901060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main3Code.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.main3Code.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.main3Code.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.main3Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main3Code.localVariables.length = 0;
}
gdjs.main3Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main3Code.asyncCallback16901060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDmaosObjects1Objects = Hashtable.newFrom({"maos": gdjs.main3Code.GDmaosObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main3Code.GDcheck_9595areaObjects1});
gdjs.main3Code.asyncCallback16905124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("maos"), gdjs.main3Code.GDmaosObjects2);

{for(var i = 0, len = gdjs.main3Code.GDmaosObjects2.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects2.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main3Code.localVariables.length = 0;
}
gdjs.main3Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main3Code.localVariables);
for (const obj of gdjs.main3Code.GDmaosObjects1) asyncObjectsList.addObject("maos", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main3Code.asyncCallback16905124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDnarizObjects1Objects = Hashtable.newFrom({"nariz": gdjs.main3Code.GDnarizObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main3Code.GDcheck_9595areaObjects1});
gdjs.main3Code.asyncCallback16909476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("nariz"), gdjs.main3Code.GDnarizObjects2);

{for(var i = 0, len = gdjs.main3Code.GDnarizObjects2.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects2.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main3Code.localVariables.length = 0;
}
gdjs.main3Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main3Code.localVariables);
for (const obj of gdjs.main3Code.GDnarizObjects1) asyncObjectsList.addObject("nariz", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main3Code.asyncCallback16909476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main3Code.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.main3Code.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main3Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main3Code.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main3Code.GDmaosObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main3Code.GDnarizObjects1);
{for(var i = 0, len = gdjs.main3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main3Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main3Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.main3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main3Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.main3Code.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main3Code.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDbocaObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16897700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDbocaObjects1 */
/* Reuse gdjs.main3Code.GDcheck_9595areaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main3Code.GDmaosObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main3Code.GDnarizObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main3Code.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 553, 363, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDbocaObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.main3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main3Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main3Code.GDmaosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDmaosObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16902524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDmaosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDmaosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main3Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main3Code.GDnarizObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDnarizObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16906588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDnarizObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main3Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDnarizObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main3Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.main3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main3Code.GDbackObjects1.length = 0;
gdjs.main3Code.GDbackObjects2.length = 0;
gdjs.main3Code.GDbackObjects3.length = 0;
gdjs.main3Code.GDcursorObjects1.length = 0;
gdjs.main3Code.GDcursorObjects2.length = 0;
gdjs.main3Code.GDcursorObjects3.length = 0;
gdjs.main3Code.GDboy4Objects1.length = 0;
gdjs.main3Code.GDboy4Objects2.length = 0;
gdjs.main3Code.GDboy4Objects3.length = 0;
gdjs.main3Code.GDfalarObjects1.length = 0;
gdjs.main3Code.GDfalarObjects2.length = 0;
gdjs.main3Code.GDfalarObjects3.length = 0;
gdjs.main3Code.GDmaosObjects1.length = 0;
gdjs.main3Code.GDmaosObjects2.length = 0;
gdjs.main3Code.GDmaosObjects3.length = 0;
gdjs.main3Code.GDbocaObjects1.length = 0;
gdjs.main3Code.GDbocaObjects2.length = 0;
gdjs.main3Code.GDbocaObjects3.length = 0;
gdjs.main3Code.GDnarizObjects1.length = 0;
gdjs.main3Code.GDnarizObjects2.length = 0;
gdjs.main3Code.GDnarizObjects3.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main3Code.GDfadeObjects1.length = 0;
gdjs.main3Code.GDfadeObjects2.length = 0;
gdjs.main3Code.GDfadeObjects3.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects3.length = 0;

gdjs.main3Code.eventsList5(runtimeScene);
gdjs.main3Code.GDbackObjects1.length = 0;
gdjs.main3Code.GDbackObjects2.length = 0;
gdjs.main3Code.GDbackObjects3.length = 0;
gdjs.main3Code.GDcursorObjects1.length = 0;
gdjs.main3Code.GDcursorObjects2.length = 0;
gdjs.main3Code.GDcursorObjects3.length = 0;
gdjs.main3Code.GDboy4Objects1.length = 0;
gdjs.main3Code.GDboy4Objects2.length = 0;
gdjs.main3Code.GDboy4Objects3.length = 0;
gdjs.main3Code.GDfalarObjects1.length = 0;
gdjs.main3Code.GDfalarObjects2.length = 0;
gdjs.main3Code.GDfalarObjects3.length = 0;
gdjs.main3Code.GDmaosObjects1.length = 0;
gdjs.main3Code.GDmaosObjects2.length = 0;
gdjs.main3Code.GDmaosObjects3.length = 0;
gdjs.main3Code.GDbocaObjects1.length = 0;
gdjs.main3Code.GDbocaObjects2.length = 0;
gdjs.main3Code.GDbocaObjects3.length = 0;
gdjs.main3Code.GDnarizObjects1.length = 0;
gdjs.main3Code.GDnarizObjects2.length = 0;
gdjs.main3Code.GDnarizObjects3.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main3Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main3Code.GDfadeObjects1.length = 0;
gdjs.main3Code.GDfadeObjects2.length = 0;
gdjs.main3Code.GDfadeObjects3.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main3Code.GDBasicExplosionEnergySparksObjects3.length = 0;


return;

}

gdjs['main3Code'] = gdjs.main3Code;
