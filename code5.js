gdjs.main4Code = {};
gdjs.main4Code.localVariables = [];
gdjs.main4Code.GDbackObjects1= [];
gdjs.main4Code.GDbackObjects2= [];
gdjs.main4Code.GDbackObjects3= [];
gdjs.main4Code.GDcursorObjects1= [];
gdjs.main4Code.GDcursorObjects2= [];
gdjs.main4Code.GDcursorObjects3= [];
gdjs.main4Code.GDboy2Objects1= [];
gdjs.main4Code.GDboy2Objects2= [];
gdjs.main4Code.GDboy2Objects3= [];
gdjs.main4Code.GDrespirarObjects1= [];
gdjs.main4Code.GDrespirarObjects2= [];
gdjs.main4Code.GDrespirarObjects3= [];
gdjs.main4Code.GDolhosObjects1= [];
gdjs.main4Code.GDolhosObjects2= [];
gdjs.main4Code.GDolhosObjects3= [];
gdjs.main4Code.GDnarizObjects1= [];
gdjs.main4Code.GDnarizObjects2= [];
gdjs.main4Code.GDnarizObjects3= [];
gdjs.main4Code.GDbocaObjects1= [];
gdjs.main4Code.GDbocaObjects2= [];
gdjs.main4Code.GDbocaObjects3= [];
gdjs.main4Code.GDcheck_9595areaObjects1= [];
gdjs.main4Code.GDcheck_9595areaObjects2= [];
gdjs.main4Code.GDcheck_9595areaObjects3= [];
gdjs.main4Code.GDfadeObjects1= [];
gdjs.main4Code.GDfadeObjects2= [];
gdjs.main4Code.GDfadeObjects3= [];
gdjs.main4Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main4Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main4Code.GDBasicExplosionEnergySparksObjects3= [];


gdjs.main4Code.eventsList0 = function(runtimeScene) {

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


};gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDnarizObjects1Objects = Hashtable.newFrom({"nariz": gdjs.main4Code.GDnarizObjects1});
gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main4Code.GDcheck_9595areaObjects1});
gdjs.main4Code.asyncCallback18280228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main5", false);
}gdjs.main4Code.localVariables.length = 0;
}
gdjs.main4Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.main4Code.asyncCallback18280228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main4Code.asyncCallback18279612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main4Code.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.main4Code.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.main4Code.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.main4Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main4Code.localVariables.length = 0;
}
gdjs.main4Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main4Code.asyncCallback18279612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDolhosObjects1Objects = Hashtable.newFrom({"olhos": gdjs.main4Code.GDolhosObjects1});
gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main4Code.GDcheck_9595areaObjects1});
gdjs.main4Code.asyncCallback18283676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("olhos"), gdjs.main4Code.GDolhosObjects2);

{for(var i = 0, len = gdjs.main4Code.GDolhosObjects2.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects2.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main4Code.localVariables.length = 0;
}
gdjs.main4Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main4Code.localVariables);
for (const obj of gdjs.main4Code.GDolhosObjects1) asyncObjectsList.addObject("olhos", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main4Code.asyncCallback18283676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDbocaObjects1Objects = Hashtable.newFrom({"boca": gdjs.main4Code.GDbocaObjects1});
gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main4Code.GDcheck_9595areaObjects1});
gdjs.main4Code.asyncCallback18288028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("boca"), gdjs.main4Code.GDbocaObjects2);

{for(var i = 0, len = gdjs.main4Code.GDbocaObjects2.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects2.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main4Code.localVariables.length = 0;
}
gdjs.main4Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main4Code.localVariables);
for (const obj of gdjs.main4Code.GDbocaObjects1) asyncObjectsList.addObject("boca", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main4Code.asyncCallback18288028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main4Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main4Code.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.main4Code.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main4Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main4Code.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main4Code.GDnarizObjects1);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main4Code.GDolhosObjects1);
{for(var i = 0, len = gdjs.main4Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main4Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main4Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.main4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main4Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main4Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main4Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main4Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main4Code.GDnarizObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDnarizObjects1Objects, gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18276068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.main4Code.GDbocaObjects1);
/* Reuse gdjs.main4Code.GDcheck_9595areaObjects1 */
/* Reuse gdjs.main4Code.GDnarizObjects1 */
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main4Code.GDolhosObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main4Code.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 553, 363, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDnarizObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.main4Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main4Code.GDcheck_9595areaObjects1);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main4Code.GDolhosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDolhosObjects1Objects, gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18281076);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main4Code.GDolhosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 763, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDolhosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main4Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boca"), gdjs.main4Code.GDbocaObjects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main4Code.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDbocaObjects1Objects, gdjs.main4Code.mapOfGDgdjs_9546main4Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18285140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main4Code.GDbocaObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main4Code.GDbocaObjects1.length ;i < len;++i) {
    gdjs.main4Code.GDbocaObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main4Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.main4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main4Code.GDbackObjects1.length = 0;
gdjs.main4Code.GDbackObjects2.length = 0;
gdjs.main4Code.GDbackObjects3.length = 0;
gdjs.main4Code.GDcursorObjects1.length = 0;
gdjs.main4Code.GDcursorObjects2.length = 0;
gdjs.main4Code.GDcursorObjects3.length = 0;
gdjs.main4Code.GDboy2Objects1.length = 0;
gdjs.main4Code.GDboy2Objects2.length = 0;
gdjs.main4Code.GDboy2Objects3.length = 0;
gdjs.main4Code.GDrespirarObjects1.length = 0;
gdjs.main4Code.GDrespirarObjects2.length = 0;
gdjs.main4Code.GDrespirarObjects3.length = 0;
gdjs.main4Code.GDolhosObjects1.length = 0;
gdjs.main4Code.GDolhosObjects2.length = 0;
gdjs.main4Code.GDolhosObjects3.length = 0;
gdjs.main4Code.GDnarizObjects1.length = 0;
gdjs.main4Code.GDnarizObjects2.length = 0;
gdjs.main4Code.GDnarizObjects3.length = 0;
gdjs.main4Code.GDbocaObjects1.length = 0;
gdjs.main4Code.GDbocaObjects2.length = 0;
gdjs.main4Code.GDbocaObjects3.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main4Code.GDfadeObjects1.length = 0;
gdjs.main4Code.GDfadeObjects2.length = 0;
gdjs.main4Code.GDfadeObjects3.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects3.length = 0;

gdjs.main4Code.eventsList5(runtimeScene);
gdjs.main4Code.GDbackObjects1.length = 0;
gdjs.main4Code.GDbackObjects2.length = 0;
gdjs.main4Code.GDbackObjects3.length = 0;
gdjs.main4Code.GDcursorObjects1.length = 0;
gdjs.main4Code.GDcursorObjects2.length = 0;
gdjs.main4Code.GDcursorObjects3.length = 0;
gdjs.main4Code.GDboy2Objects1.length = 0;
gdjs.main4Code.GDboy2Objects2.length = 0;
gdjs.main4Code.GDboy2Objects3.length = 0;
gdjs.main4Code.GDrespirarObjects1.length = 0;
gdjs.main4Code.GDrespirarObjects2.length = 0;
gdjs.main4Code.GDrespirarObjects3.length = 0;
gdjs.main4Code.GDolhosObjects1.length = 0;
gdjs.main4Code.GDolhosObjects2.length = 0;
gdjs.main4Code.GDolhosObjects3.length = 0;
gdjs.main4Code.GDnarizObjects1.length = 0;
gdjs.main4Code.GDnarizObjects2.length = 0;
gdjs.main4Code.GDnarizObjects3.length = 0;
gdjs.main4Code.GDbocaObjects1.length = 0;
gdjs.main4Code.GDbocaObjects2.length = 0;
gdjs.main4Code.GDbocaObjects3.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main4Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main4Code.GDfadeObjects1.length = 0;
gdjs.main4Code.GDfadeObjects2.length = 0;
gdjs.main4Code.GDfadeObjects3.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main4Code.GDBasicExplosionEnergySparksObjects3.length = 0;


return;

}

gdjs['main4Code'] = gdjs.main4Code;
