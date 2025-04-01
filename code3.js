gdjs.main2Code = {};
gdjs.main2Code.localVariables = [];
gdjs.main2Code.GDbackObjects1= [];
gdjs.main2Code.GDbackObjects2= [];
gdjs.main2Code.GDbackObjects3= [];
gdjs.main2Code.GDcursorObjects1= [];
gdjs.main2Code.GDcursorObjects2= [];
gdjs.main2Code.GDcursorObjects3= [];
gdjs.main2Code.GDboy3Objects1= [];
gdjs.main2Code.GDboy3Objects2= [];
gdjs.main2Code.GDboy3Objects3= [];
gdjs.main2Code.GDandarObjects1= [];
gdjs.main2Code.GDandarObjects2= [];
gdjs.main2Code.GDandarObjects3= [];
gdjs.main2Code.GDbracosObjects1= [];
gdjs.main2Code.GDbracosObjects2= [];
gdjs.main2Code.GDbracosObjects3= [];
gdjs.main2Code.GDpesObjects1= [];
gdjs.main2Code.GDpesObjects2= [];
gdjs.main2Code.GDpesObjects3= [];
gdjs.main2Code.GDmaosObjects1= [];
gdjs.main2Code.GDmaosObjects2= [];
gdjs.main2Code.GDmaosObjects3= [];
gdjs.main2Code.GDcheck_9595areaObjects1= [];
gdjs.main2Code.GDcheck_9595areaObjects2= [];
gdjs.main2Code.GDcheck_9595areaObjects3= [];
gdjs.main2Code.GDfadeObjects1= [];
gdjs.main2Code.GDfadeObjects2= [];
gdjs.main2Code.GDfadeObjects3= [];
gdjs.main2Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main2Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main2Code.GDBasicExplosionEnergySparksObjects3= [];


gdjs.main2Code.eventsList0 = function(runtimeScene) {

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


};gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDpesObjects1Objects = Hashtable.newFrom({"pes": gdjs.main2Code.GDpesObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main2Code.GDcheck_9595areaObjects1});
gdjs.main2Code.asyncCallback17481596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main3", false);
}gdjs.main2Code.localVariables.length = 0;
}
gdjs.main2Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.main2Code.asyncCallback17481596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main2Code.asyncCallback17533700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main2Code.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.main2Code.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.main2Code.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.main2Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main2Code.localVariables.length = 0;
}
gdjs.main2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main2Code.asyncCallback17533700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDbracosObjects1Objects = Hashtable.newFrom({"bracos": gdjs.main2Code.GDbracosObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main2Code.GDcheck_9595areaObjects1});
gdjs.main2Code.asyncCallback16835676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("bracos"), gdjs.main2Code.GDbracosObjects2);

{for(var i = 0, len = gdjs.main2Code.GDbracosObjects2.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects2.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main2Code.localVariables.length = 0;
}
gdjs.main2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main2Code.localVariables);
for (const obj of gdjs.main2Code.GDbracosObjects1) asyncObjectsList.addObject("bracos", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main2Code.asyncCallback16835676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDmaosObjects1Objects = Hashtable.newFrom({"maos": gdjs.main2Code.GDmaosObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main2Code.GDcheck_9595areaObjects1});
gdjs.main2Code.asyncCallback16840428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("maos"), gdjs.main2Code.GDmaosObjects2);

{for(var i = 0, len = gdjs.main2Code.GDmaosObjects2.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects2.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main2Code.localVariables.length = 0;
}
gdjs.main2Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main2Code.localVariables);
for (const obj of gdjs.main2Code.GDmaosObjects1) asyncObjectsList.addObject("maos", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main2Code.asyncCallback16840428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main2Code.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("bracos"), gdjs.main2Code.GDbracosObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main2Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main2Code.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main2Code.GDmaosObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main2Code.GDpesObjects1);
{for(var i = 0, len = gdjs.main2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main2Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.main2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main2Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main2Code.GDpesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDpesObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17555956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bracos"), gdjs.main2Code.GDbracosObjects1);
/* Reuse gdjs.main2Code.GDcheck_9595areaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main2Code.GDmaosObjects1);
/* Reuse gdjs.main2Code.GDpesObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main2Code.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 557, 850, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDpesObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.main2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bracos"), gdjs.main2Code.GDbracosObjects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main2Code.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDbracosObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16832060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDbracosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDbracosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDbracosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main2Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main2Code.GDmaosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDmaosObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16837260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDmaosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main2Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDmaosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.main2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main2Code.GDbackObjects1.length = 0;
gdjs.main2Code.GDbackObjects2.length = 0;
gdjs.main2Code.GDbackObjects3.length = 0;
gdjs.main2Code.GDcursorObjects1.length = 0;
gdjs.main2Code.GDcursorObjects2.length = 0;
gdjs.main2Code.GDcursorObjects3.length = 0;
gdjs.main2Code.GDboy3Objects1.length = 0;
gdjs.main2Code.GDboy3Objects2.length = 0;
gdjs.main2Code.GDboy3Objects3.length = 0;
gdjs.main2Code.GDandarObjects1.length = 0;
gdjs.main2Code.GDandarObjects2.length = 0;
gdjs.main2Code.GDandarObjects3.length = 0;
gdjs.main2Code.GDbracosObjects1.length = 0;
gdjs.main2Code.GDbracosObjects2.length = 0;
gdjs.main2Code.GDbracosObjects3.length = 0;
gdjs.main2Code.GDpesObjects1.length = 0;
gdjs.main2Code.GDpesObjects2.length = 0;
gdjs.main2Code.GDpesObjects3.length = 0;
gdjs.main2Code.GDmaosObjects1.length = 0;
gdjs.main2Code.GDmaosObjects2.length = 0;
gdjs.main2Code.GDmaosObjects3.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main2Code.GDfadeObjects1.length = 0;
gdjs.main2Code.GDfadeObjects2.length = 0;
gdjs.main2Code.GDfadeObjects3.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects3.length = 0;

gdjs.main2Code.eventsList5(runtimeScene);
gdjs.main2Code.GDbackObjects1.length = 0;
gdjs.main2Code.GDbackObjects2.length = 0;
gdjs.main2Code.GDbackObjects3.length = 0;
gdjs.main2Code.GDcursorObjects1.length = 0;
gdjs.main2Code.GDcursorObjects2.length = 0;
gdjs.main2Code.GDcursorObjects3.length = 0;
gdjs.main2Code.GDboy3Objects1.length = 0;
gdjs.main2Code.GDboy3Objects2.length = 0;
gdjs.main2Code.GDboy3Objects3.length = 0;
gdjs.main2Code.GDandarObjects1.length = 0;
gdjs.main2Code.GDandarObjects2.length = 0;
gdjs.main2Code.GDandarObjects3.length = 0;
gdjs.main2Code.GDbracosObjects1.length = 0;
gdjs.main2Code.GDbracosObjects2.length = 0;
gdjs.main2Code.GDbracosObjects3.length = 0;
gdjs.main2Code.GDpesObjects1.length = 0;
gdjs.main2Code.GDpesObjects2.length = 0;
gdjs.main2Code.GDpesObjects3.length = 0;
gdjs.main2Code.GDmaosObjects1.length = 0;
gdjs.main2Code.GDmaosObjects2.length = 0;
gdjs.main2Code.GDmaosObjects3.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main2Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main2Code.GDfadeObjects1.length = 0;
gdjs.main2Code.GDfadeObjects2.length = 0;
gdjs.main2Code.GDfadeObjects3.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main2Code.GDBasicExplosionEnergySparksObjects3.length = 0;


return;

}

gdjs['main2Code'] = gdjs.main2Code;
