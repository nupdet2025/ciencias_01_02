gdjs.main5Code = {};
gdjs.main5Code.localVariables = [];
gdjs.main5Code.GDcheck_9595area2Objects1_1final = [];

gdjs.main5Code.GDcheck_9595areaObjects1_1final = [];

gdjs.main5Code.GDmaosObjects1_1final = [];

gdjs.main5Code.GDnarizObjects1_1final = [];

gdjs.main5Code.GDpesObjects1_1final = [];

gdjs.main5Code.GDbackObjects1= [];
gdjs.main5Code.GDbackObjects2= [];
gdjs.main5Code.GDbackObjects3= [];
gdjs.main5Code.GDcursorObjects1= [];
gdjs.main5Code.GDcursorObjects2= [];
gdjs.main5Code.GDcursorObjects3= [];
gdjs.main5Code.GDboy3Objects1= [];
gdjs.main5Code.GDboy3Objects2= [];
gdjs.main5Code.GDboy3Objects3= [];
gdjs.main5Code.GDpalmasObjects1= [];
gdjs.main5Code.GDpalmasObjects2= [];
gdjs.main5Code.GDpalmasObjects3= [];
gdjs.main5Code.GDnarizObjects1= [];
gdjs.main5Code.GDnarizObjects2= [];
gdjs.main5Code.GDnarizObjects3= [];
gdjs.main5Code.GDmaosObjects1= [];
gdjs.main5Code.GDmaosObjects2= [];
gdjs.main5Code.GDmaosObjects3= [];
gdjs.main5Code.GDpesObjects1= [];
gdjs.main5Code.GDpesObjects2= [];
gdjs.main5Code.GDpesObjects3= [];
gdjs.main5Code.GDcheck_9595areaObjects1= [];
gdjs.main5Code.GDcheck_9595areaObjects2= [];
gdjs.main5Code.GDcheck_9595areaObjects3= [];
gdjs.main5Code.GDfadeObjects1= [];
gdjs.main5Code.GDfadeObjects2= [];
gdjs.main5Code.GDfadeObjects3= [];
gdjs.main5Code.GDBasicExplosionEnergySparksObjects1= [];
gdjs.main5Code.GDBasicExplosionEnergySparksObjects2= [];
gdjs.main5Code.GDBasicExplosionEnergySparksObjects3= [];
gdjs.main5Code.GDcheck_9595area2Objects1= [];
gdjs.main5Code.GDcheck_9595area2Objects2= [];
gdjs.main5Code.GDcheck_9595area2Objects3= [];


gdjs.main5Code.eventsList0 = function(runtimeScene) {

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


};gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDmaosObjects2Objects = Hashtable.newFrom({"maos": gdjs.main5Code.GDmaosObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main5Code.GDcheck_9595areaObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDmaosObjects2Objects = Hashtable.newFrom({"maos": gdjs.main5Code.GDmaosObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main5Code.GDcheck_9595area2Objects2});
gdjs.main5Code.asyncCallback13136668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main6", false);
}gdjs.main5Code.localVariables.length = 0;
}
gdjs.main5Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.main5Code.asyncCallback13136668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main5Code.asyncCallback13136396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main5Code.GDBasicExplosionEnergySparksObjects2);
{for(var i = 0, len = gdjs.main5Code.GDBasicExplosionEnergySparksObjects2.length ;i < len;++i) {
    gdjs.main5Code.GDBasicExplosionEnergySparksObjects2[i].startEmission();
}
}
{ //Subevents
gdjs.main5Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main5Code.localVariables.length = 0;
}
gdjs.main5Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main5Code.asyncCallback13136396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDnarizObjects2Objects = Hashtable.newFrom({"nariz": gdjs.main5Code.GDnarizObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main5Code.GDcheck_9595areaObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDnarizObjects2Objects = Hashtable.newFrom({"nariz": gdjs.main5Code.GDnarizObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main5Code.GDcheck_9595area2Objects2});
gdjs.main5Code.asyncCallback13141484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("nariz"), gdjs.main5Code.GDnarizObjects2);

{for(var i = 0, len = gdjs.main5Code.GDnarizObjects2.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects2.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main5Code.localVariables.length = 0;
}
gdjs.main5Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main5Code.localVariables);
for (const obj of gdjs.main5Code.GDnarizObjects1) asyncObjectsList.addObject("nariz", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main5Code.asyncCallback13141484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDpesObjects2Objects = Hashtable.newFrom({"pes": gdjs.main5Code.GDpesObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects = Hashtable.newFrom({"check_area": gdjs.main5Code.GDcheck_9595areaObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDpesObjects2Objects = Hashtable.newFrom({"pes": gdjs.main5Code.GDpesObjects2});
gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects = Hashtable.newFrom({"check_area2": gdjs.main5Code.GDcheck_9595area2Objects2});
gdjs.main5Code.asyncCallback13146196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("pes"), gdjs.main5Code.GDpesObjects2);

{for(var i = 0, len = gdjs.main5Code.GDpesObjects2.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects2[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects2.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects2[i].activateBehavior("Draggable", true);
}
}gdjs.main5Code.localVariables.length = 0;
}
gdjs.main5Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main5Code.localVariables);
for (const obj of gdjs.main5Code.GDpesObjects1) asyncObjectsList.addObject("pes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.9), (runtimeScene) => (gdjs.main5Code.asyncCallback13146196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main5Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasicExplosionEnergySparks"), gdjs.main5Code.GDBasicExplosionEnergySparksObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main5Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main5Code.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main5Code.GDmaosObjects1);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main5Code.GDnarizObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main5Code.GDpesObjects1);
{for(var i = 0, len = gdjs.main5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main5Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.3, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("error", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("right", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDBasicExplosionEnergySparksObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main5Code.GDBasicExplosionEnergySparksObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDBasicExplosionEnergySparksObjects1[i].recreateParticleSystem();
}
}
{ //Subevents
gdjs.main5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main5Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.main5Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main5Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main5Code.GDmaosObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main5Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main5Code.GDmaosObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main5Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main5Code.GDmaosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDmaosObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main5Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595areaObjects1_1final.push(gdjs.main5Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDmaosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDmaosObjects1_1final.indexOf(gdjs.main5Code.GDmaosObjects2[j]) === -1 )
            gdjs.main5Code.GDmaosObjects1_1final.push(gdjs.main5Code.GDmaosObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main5Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("maos"), gdjs.main5Code.GDmaosObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDmaosObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main5Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595area2Objects1_1final.push(gdjs.main5Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDmaosObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDmaosObjects1_1final.indexOf(gdjs.main5Code.GDmaosObjects2[j]) === -1 )
            gdjs.main5Code.GDmaosObjects1_1final.push(gdjs.main5Code.GDmaosObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main5Code.GDcheck_9595areaObjects1_1final, gdjs.main5Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main5Code.GDcheck_9595area2Objects1_1final, gdjs.main5Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main5Code.GDmaosObjects1_1final, gdjs.main5Code.GDmaosObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13132252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main5Code.GDcheck_9595areaObjects1 */
/* Reuse gdjs.main5Code.GDcheck_9595area2Objects1 */
/* Reuse gdjs.main5Code.GDmaosObjects1 */
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main5Code.GDnarizObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main5Code.GDpesObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main5Code.GDcheck_9595area2Objects1.length ;i < len;++i) {
    gdjs.main5Code.GDcheck_9595area2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main5Code.GDcheck_9595areaObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDcheck_9595areaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].getBehavior("Effect").enableEffect("right", true);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].getBehavior("Tween").addObjectScaleTween3("Valid", 0.75, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 690, 694, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDmaosObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDmaosObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents
gdjs.main5Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.main5Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main5Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main5Code.GDnarizObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main5Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main5Code.GDnarizObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main5Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main5Code.GDnarizObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDnarizObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main5Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595areaObjects1_1final.push(gdjs.main5Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDnarizObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDnarizObjects1_1final.indexOf(gdjs.main5Code.GDnarizObjects2[j]) === -1 )
            gdjs.main5Code.GDnarizObjects1_1final.push(gdjs.main5Code.GDnarizObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main5Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("nariz"), gdjs.main5Code.GDnarizObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDnarizObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main5Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595area2Objects1_1final.push(gdjs.main5Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDnarizObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDnarizObjects1_1final.indexOf(gdjs.main5Code.GDnarizObjects2[j]) === -1 )
            gdjs.main5Code.GDnarizObjects1_1final.push(gdjs.main5Code.GDnarizObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main5Code.GDcheck_9595areaObjects1_1final, gdjs.main5Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main5Code.GDcheck_9595area2Objects1_1final, gdjs.main5Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main5Code.GDnarizObjects1_1final, gdjs.main5Code.GDnarizObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13138764);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main5Code.GDnarizObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 407, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDnarizObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDnarizObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main5Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.main5Code.GDcheck_9595areaObjects1.length = 0;

gdjs.main5Code.GDcheck_9595area2Objects1.length = 0;

gdjs.main5Code.GDpesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.main5Code.GDcheck_9595areaObjects1_1final.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects1_1final.length = 0;
gdjs.main5Code.GDpesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main5Code.GDcheck_9595areaObjects2);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main5Code.GDpesObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDpesObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595areaObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595areaObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595areaObjects1_1final.indexOf(gdjs.main5Code.GDcheck_9595areaObjects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595areaObjects1_1final.push(gdjs.main5Code.GDcheck_9595areaObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDpesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDpesObjects1_1final.indexOf(gdjs.main5Code.GDpesObjects2[j]) === -1 )
            gdjs.main5Code.GDpesObjects1_1final.push(gdjs.main5Code.GDpesObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main5Code.GDcheck_9595area2Objects2);
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.main5Code.GDpesObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDpesObjects2Objects, gdjs.main5Code.mapOfGDgdjs_9546main5Code_9546GDcheck_95959595area2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.main5Code.GDcheck_9595area2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDcheck_9595area2Objects1_1final.indexOf(gdjs.main5Code.GDcheck_9595area2Objects2[j]) === -1 )
            gdjs.main5Code.GDcheck_9595area2Objects1_1final.push(gdjs.main5Code.GDcheck_9595area2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.main5Code.GDpesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.main5Code.GDpesObjects1_1final.indexOf(gdjs.main5Code.GDpesObjects2[j]) === -1 )
            gdjs.main5Code.GDpesObjects1_1final.push(gdjs.main5Code.GDpesObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.main5Code.GDcheck_9595areaObjects1_1final, gdjs.main5Code.GDcheck_9595areaObjects1);
gdjs.copyArray(gdjs.main5Code.GDcheck_9595area2Objects1_1final, gdjs.main5Code.GDcheck_9595area2Objects1);
gdjs.copyArray(gdjs.main5Code.GDpesObjects1_1final, gdjs.main5Code.GDpesObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13144108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main5Code.GDpesObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].getBehavior("Effect").enableEffect("error", true);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].getBehavior("Tween").addObjectPositionTween2("back", 1371, 586, "easeOutBounce", 0.8, false);
}
}{for(var i = 0, len = gdjs.main5Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.main5Code.GDpesObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 8, 8, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main5Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.main5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main5Code.GDbackObjects1.length = 0;
gdjs.main5Code.GDbackObjects2.length = 0;
gdjs.main5Code.GDbackObjects3.length = 0;
gdjs.main5Code.GDcursorObjects1.length = 0;
gdjs.main5Code.GDcursorObjects2.length = 0;
gdjs.main5Code.GDcursorObjects3.length = 0;
gdjs.main5Code.GDboy3Objects1.length = 0;
gdjs.main5Code.GDboy3Objects2.length = 0;
gdjs.main5Code.GDboy3Objects3.length = 0;
gdjs.main5Code.GDpalmasObjects1.length = 0;
gdjs.main5Code.GDpalmasObjects2.length = 0;
gdjs.main5Code.GDpalmasObjects3.length = 0;
gdjs.main5Code.GDnarizObjects1.length = 0;
gdjs.main5Code.GDnarizObjects2.length = 0;
gdjs.main5Code.GDnarizObjects3.length = 0;
gdjs.main5Code.GDmaosObjects1.length = 0;
gdjs.main5Code.GDmaosObjects2.length = 0;
gdjs.main5Code.GDmaosObjects3.length = 0;
gdjs.main5Code.GDpesObjects1.length = 0;
gdjs.main5Code.GDpesObjects2.length = 0;
gdjs.main5Code.GDpesObjects3.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main5Code.GDfadeObjects1.length = 0;
gdjs.main5Code.GDfadeObjects2.length = 0;
gdjs.main5Code.GDfadeObjects3.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects3.length = 0;

gdjs.main5Code.eventsList5(runtimeScene);
gdjs.main5Code.GDbackObjects1.length = 0;
gdjs.main5Code.GDbackObjects2.length = 0;
gdjs.main5Code.GDbackObjects3.length = 0;
gdjs.main5Code.GDcursorObjects1.length = 0;
gdjs.main5Code.GDcursorObjects2.length = 0;
gdjs.main5Code.GDcursorObjects3.length = 0;
gdjs.main5Code.GDboy3Objects1.length = 0;
gdjs.main5Code.GDboy3Objects2.length = 0;
gdjs.main5Code.GDboy3Objects3.length = 0;
gdjs.main5Code.GDpalmasObjects1.length = 0;
gdjs.main5Code.GDpalmasObjects2.length = 0;
gdjs.main5Code.GDpalmasObjects3.length = 0;
gdjs.main5Code.GDnarizObjects1.length = 0;
gdjs.main5Code.GDnarizObjects2.length = 0;
gdjs.main5Code.GDnarizObjects3.length = 0;
gdjs.main5Code.GDmaosObjects1.length = 0;
gdjs.main5Code.GDmaosObjects2.length = 0;
gdjs.main5Code.GDmaosObjects3.length = 0;
gdjs.main5Code.GDpesObjects1.length = 0;
gdjs.main5Code.GDpesObjects2.length = 0;
gdjs.main5Code.GDpesObjects3.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main5Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main5Code.GDfadeObjects1.length = 0;
gdjs.main5Code.GDfadeObjects2.length = 0;
gdjs.main5Code.GDfadeObjects3.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.main5Code.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main5Code.GDcheck_9595area2Objects3.length = 0;


return;

}

gdjs['main5Code'] = gdjs.main5Code;
