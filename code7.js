gdjs.main6Code = {};
gdjs.main6Code.localVariables = [];
gdjs.main6Code.GDcheck_9595area2Objects1_1final = [];

gdjs.main6Code.GDcheck_9595areaObjects1_1final = [];

gdjs.main6Code.GDolhosObjects1_1final = [];

gdjs.main6Code.GDouvidosObjects1_1final = [];

gdjs.main6Code.GDpesObjects1_1final = [];

gdjs.main6Code.GDbackObjects1= [];
gdjs.main6Code.GDbackObjects2= [];
gdjs.main6Code.GDbackObjects3= [];
gdjs.main6Code.GDcursorObjects1= [];
gdjs.main6Code.GDcursorObjects2= [];
gdjs.main6Code.GDcursorObjects3= [];
gdjs.main6Code.GDboy4Objects1= [];
gdjs.main6Code.GDboy4Objects2= [];
gdjs.main6Code.GDboy4Objects3= [];
gdjs.main6Code.GDouvirObjects1= [];
gdjs.main6Code.GDouvirObjects2= [];
gdjs.main6Code.GDouvirObjects3= [];
gdjs.main6Code.GDolhosObjects1= [];
gdjs.main6Code.GDolhosObjects2= [];
gdjs.main6Code.GDolhosObjects3= [];
gdjs.main6Code.GDouvidosObjects1= [];
gdjs.main6Code.GDouvidosObjects2= [];
gdjs.main6Code.GDouvidosObjects3= [];
gdjs.main6Code.GDpesObjects1= [];
gdjs.main6Code.GDpesObjects2= [];
gdjs.main6Code.GDpesObjects3= [];
gdjs.main6Code.GDcheck_9595areaObjects1= [];
gdjs.main6Code.GDcheck_9595areaObjects2= [];
gdjs.main6Code.GDcheck_9595areaObjects3= [];
gdjs.main6Code.GDfadeObjects1= [];
gdjs.main6Code.GDfadeObjects2= [];
gdjs.main6Code.GDfadeObjects3= [];
gdjs.main6Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main6Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main6Code.GDBasicExplosionEnergySparksObjects3= [];
gdjs.main6Code.GDcheck_9595area2Objects1= [];
gdjs.main6Code.GDcheck_9595area2Objects2= [];
gdjs.main6Code.GDcheck_9595area2Objects3= [];


gdjs.main6Code.eventsList0 = function(runtimeScene) {

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


};gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDouvidosObjects2Objects = Hashtable.newFrom({"ouvidos": gdjs.main6Code.GDouvidosObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main6Code.GDcheck_9595areaObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDouvidosObjects2Objects = Hashtable.newFrom({"ouvidos": gdjs.main6Code.GDouvidosObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main6Code.GDcheck_9595area2Objects2});
gdjs.main6Code.asyncCallback10248508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main7", false);
}gdjs.main6Code.localVariables.length = 0;
}
gdjs.main6Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.main6Code.asyncCallback10248508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main6Code.asyncCallback10248236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main6Code.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.main6Code.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.main6Code.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.main6Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main6Code.localVariables.length = 0;
}
gdjs.main6Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main6Code.asyncCallback10248236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDolhosObjects2Objects = Hashtable.newFrom({"olhos": gdjs.main6Code.GDolhosObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main6Code.GDcheck_9595areaObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDolhosObjects2Objects = Hashtable.newFrom({"olhos": gdjs.main6Code.GDolhosObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main6Code.GDcheck_9595area2Objects2});
gdjs.main6Code.asyncCallback10253324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("olhos"), gdjs.main6Code.GDolhosObjects2);

{for(var i = 0, len = gdjs.main6Code.GDolhosObjects2.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects2.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main6Code.localVariables.length = 0;
}
gdjs.main6Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main6Code.localVariables);
for (const obj of gdjs.main6Code.GDolhosObjects1) asyncObjectsList.addObject("olhos", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main6Code.asyncCallback10253324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDpesObjects2Objects = Hashtable.newFrom({"pes": gdjs.main6Code.GDpesObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main6Code.GDcheck_9595areaObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDpesObjects2Objects = Hashtable.newFrom({"pes": gdjs.main6Code.GDpesObjects2});
gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main6Code.GDcheck_9595area2Objects2});
gdjs.main6Code.asyncCallback10258036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("pes"), gdjs.main6Code.GDpesObjects2);

{for(var i = 0, len = gdjs.main6Code.GDpesObjects2.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects2.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main6Code.localVariables.length = 0;
}
gdjs.main6Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main6Code.localVariables);
for (const obj of gdjs.main6Code.GDpesObjects1) asyncObjectsList.addObject("pes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main6Code.asyncCallback10258036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main6Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main6Code.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main6Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main6Code.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main6Code.GDolhosObjects1);
gdjs.copyArray(runtimeScene.getObjects("ouvidos"), gdjs.main6Code.GDouvidosObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main6Code.GDpesObjects1);
{for(var i = 0, len = gdjs.main6Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main6Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main6Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.main6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main6Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main6Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main6Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.main6Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main6Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main6Code.GDouvidosObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main6Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main6Code.GDouvidosObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main6Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("ouvidos"), gdjs.main6Code.GDouvidosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDouvidosObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main6Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595areaObjects1_1final.push(gdjs.main6Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDouvidosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDouvidosObjects1_1final.indexOf(gdjs.main6Code.GDouvidosObjects2[j]) === -1 )
            gdjs.main6Code.GDouvidosObjects1_1final.push(gdjs.main6Code.GDouvidosObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main6Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ouvidos"), gdjs.main6Code.GDouvidosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDouvidosObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main6Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595area2Objects1_1final.push(gdjs.main6Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDouvidosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDouvidosObjects1_1final.indexOf(gdjs.main6Code.GDouvidosObjects2[j]) === -1 )
            gdjs.main6Code.GDouvidosObjects1_1final.push(gdjs.main6Code.GDouvidosObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main6Code.GDcheck_9595areaObjects1_1final, gdjs.main6Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main6Code.GDcheck_9595area2Objects1_1final, gdjs.main6Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main6Code.GDouvidosObjects1_1final, gdjs.main6Code.GDouvidosObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10244276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main6Code.GDcheck_9595areaObjects1 */
/* Reuse gdjs.main6Code.GDcheck_9595area2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main6Code.GDolhosObjects1);
/* Reuse gdjs.main6Code.GDouvidosObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main6Code.GDpesObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main6Code.GDcheck_9595area2Objects1.length ;i < len;++i) {
    gdjs.main6Code.GDcheck_9595area2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main6Code.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 8, 373, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDouvidosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDouvidosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.main6Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.main6Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main6Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main6Code.GDolhosObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main6Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main6Code.GDolhosObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main6Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main6Code.GDolhosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDolhosObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main6Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595areaObjects1_1final.push(gdjs.main6Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDolhosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDolhosObjects1_1final.indexOf(gdjs.main6Code.GDolhosObjects2[j]) === -1 )
            gdjs.main6Code.GDolhosObjects1_1final.push(gdjs.main6Code.GDolhosObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main6Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("olhos"), gdjs.main6Code.GDolhosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDolhosObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main6Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595area2Objects1_1final.push(gdjs.main6Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDolhosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDolhosObjects1_1final.indexOf(gdjs.main6Code.GDolhosObjects2[j]) === -1 )
            gdjs.main6Code.GDolhosObjects1_1final.push(gdjs.main6Code.GDolhosObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main6Code.GDcheck_9595areaObjects1_1final, gdjs.main6Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main6Code.GDcheck_9595area2Objects1_1final, gdjs.main6Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main6Code.GDolhosObjects1_1final, gdjs.main6Code.GDolhosObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10250604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main6Code.GDolhosObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDolhosObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDolhosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main6Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.main6Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main6Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main6Code.GDpesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main6Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main6Code.GDpesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main6Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main6Code.GDpesObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDpesObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main6Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595areaObjects1_1final.push(gdjs.main6Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDpesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDpesObjects1_1final.indexOf(gdjs.main6Code.GDpesObjects2[j]) === -1 )
            gdjs.main6Code.GDpesObjects1_1final.push(gdjs.main6Code.GDpesObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main6Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main6Code.GDpesObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDpesObjects2Objects, gdjs.main6Code.mapOfGDgdjs_9546main6Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main6Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main6Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main6Code.GDcheck_9595area2Objects1_1final.push(gdjs.main6Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main6Code.GDpesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main6Code.GDpesObjects1_1final.indexOf(gdjs.main6Code.GDpesObjects2[j]) === -1 )
            gdjs.main6Code.GDpesObjects1_1final.push(gdjs.main6Code.GDpesObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main6Code.GDcheck_9595areaObjects1_1final, gdjs.main6Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main6Code.GDcheck_9595area2Objects1_1final, gdjs.main6Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main6Code.GDpesObjects1_1final, gdjs.main6Code.GDpesObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10255948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main6Code.GDpesObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main6Code.GDpesObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main6Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.main6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main6Code.GDbackObjects1.length = 0;
gdjs.main6Code.GDbackObjects2.length = 0;
gdjs.main6Code.GDbackObjects3.length = 0;
gdjs.main6Code.GDcursorObjects1.length = 0;
gdjs.main6Code.GDcursorObjects2.length = 0;
gdjs.main6Code.GDcursorObjects3.length = 0;
gdjs.main6Code.GDboy4Objects1.length = 0;
gdjs.main6Code.GDboy4Objects2.length = 0;
gdjs.main6Code.GDboy4Objects3.length = 0;
gdjs.main6Code.GDouvirObjects1.length = 0;
gdjs.main6Code.GDouvirObjects2.length = 0;
gdjs.main6Code.GDouvirObjects3.length = 0;
gdjs.main6Code.GDolhosObjects1.length = 0;
gdjs.main6Code.GDolhosObjects2.length = 0;
gdjs.main6Code.GDolhosObjects3.length = 0;
gdjs.main6Code.GDouvidosObjects1.length = 0;
gdjs.main6Code.GDouvidosObjects2.length = 0;
gdjs.main6Code.GDouvidosObjects3.length = 0;
gdjs.main6Code.GDpesObjects1.length = 0;
gdjs.main6Code.GDpesObjects2.length = 0;
gdjs.main6Code.GDpesObjects3.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main6Code.GDfadeObjects1.length = 0;
gdjs.main6Code.GDfadeObjects2.length = 0;
gdjs.main6Code.GDfadeObjects3.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects3.length = 0;

gdjs.main6Code.eventsList5(runtimeScene);
gdjs.main6Code.GDbackObjects1.length = 0;
gdjs.main6Code.GDbackObjects2.length = 0;
gdjs.main6Code.GDbackObjects3.length = 0;
gdjs.main6Code.GDcursorObjects1.length = 0;
gdjs.main6Code.GDcursorObjects2.length = 0;
gdjs.main6Code.GDcursorObjects3.length = 0;
gdjs.main6Code.GDboy4Objects1.length = 0;
gdjs.main6Code.GDboy4Objects2.length = 0;
gdjs.main6Code.GDboy4Objects3.length = 0;
gdjs.main6Code.GDouvirObjects1.length = 0;
gdjs.main6Code.GDouvirObjects2.length = 0;
gdjs.main6Code.GDouvirObjects3.length = 0;
gdjs.main6Code.GDolhosObjects1.length = 0;
gdjs.main6Code.GDolhosObjects2.length = 0;
gdjs.main6Code.GDolhosObjects3.length = 0;
gdjs.main6Code.GDouvidosObjects1.length = 0;
gdjs.main6Code.GDouvidosObjects2.length = 0;
gdjs.main6Code.GDouvidosObjects3.length = 0;
gdjs.main6Code.GDpesObjects1.length = 0;
gdjs.main6Code.GDpesObjects2.length = 0;
gdjs.main6Code.GDpesObjects3.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main6Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main6Code.GDfadeObjects1.length = 0;
gdjs.main6Code.GDfadeObjects2.length = 0;
gdjs.main6Code.GDfadeObjects3.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main6Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main6Code.GDcheck_9595area2Objects3.length = 0;


return;

}

gdjs['main6Code'] = gdjs.main6Code;
