var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { StartupEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
const MAP = {
    panda: "mob.panda.idle", slime: "mob.slime.squish", dragon: "mob.enderdragon.growl", bee: "mob.bee.loop",
    llama: "mob.llama.idle", magma: "mob.magmacube.jump", axolotl: "mob.axolotl.idle", turtle: "mob.turtle.ambient",
    snow: "mob.snowgolem.shoot", dolphin: "mob.dolphin.idle", parrot: "mob.parrot.idle", warden: "mob.warden.roar",
    goat: "mob.goat.ambient", enderman: "mob.endermen.idle", sheep: "mob.sheep.say", pig: "mob.pig.say",
    tadpole: "mob.tadpole.idle", allay: "mob.allay.idle", vex: "mob.vex.charge", creeper: "random.fuse",
    strider: "mob.strider.idle", chicken: "mob.chicken.say", vindicator: "mob.vindicator.idle",
    evoker: "mob.evocation_illager.ambient", wolf: "mob.wolf.bark", pillager: "mob.pillager.idle",
    illusioner: "mob.illager.idle", camel: "mob.camel.idle", guardian: "mob.guardian.ambient",
    elder: "mob.elderguardian.idle", sniffer: "mob.sniffer.idle", polar: "mob.polarbear.idle",
    witch: "mob.witch.ambient", ravager: "mob.ravager.idle", horse: "mob.horse.idle", hoglin: "mob.hoglin.ambient",
    bat: "mob.bat.idle", villager: "mob.villager.idle", trader: "mob.wanderingtrader.idle",
    iron: "mob.irongolem.crack", blaze: "mob.blaze.breathe", ghast: "mob.ghast.moan", phantom: "mob.phantom.idle",
    shulker: "mob.shulker.ambient", zoglin: "mob.zoglin.idle", wither: "mob.wither.spawn",
    armadillo: "mob.armadillo.ambient", breeze: "mob.breeze.idle"
};
class Plushies {
    constructor() { this.onPlayerInteract = this.onPlayerInteract.bind(this); }
    onPlayerInteract(args) {
        const b = args.block, p = args.player, id = b.typeId;
        let s = null;
        for (let k in MAP) { if (id.includes(k)) { s = MAP[k]; break; } }
        if (!s) {
            if (id.includes("rabbit")) s = "mob.rabbit.hop";
            else if (id.includes("fox")) s = "mob.fox.ambient";
            else if (id.includes("frog")) s = "mob.frog.ambient";
            else if (id.includes("fish") || id.includes("cod") || id.includes("salmon")) s = "mob.fish.flop";
            else if (id.includes("skeleton") || id.includes("stray") || id.includes("bogged")) s = "mob.skeleton.say";
            else if (id.includes("zombie") || id.includes("husk") || id.includes("drowned")) s = "mob.zombie.say";
            else if (id.includes("piglin")) s = "mob.piglin.admire";
            else if (id.includes("squid")) s = "mob.squid.ambient";
            else if (id.includes("spider")) s = "mob.spider.say";
            else if (id.includes("silverfish") || id.includes("endermite")) s = "mob.silverfish.say";
            else if (id.includes("cat") || id.includes("ocelot")) s = "mob.cat.meow";
            else if (id.includes("cow") || id.includes("mooshroom")) s = "mob.cow.say";
        }
        p.playSound("hit.cloth", { location: b.location, volume: 0.5, pitch: 1.2 });
        if (s) p.playSound(s, { location: b.location, volume: 1.0, pitch: 1.2 });
    }
}
export class PlushiesRegister {
    register(args) { args.blockComponentRegistry.registerCustomComponent('plushies:is_plushies', new Plushies()); }
}
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], PlushiesRegister.prototype, "register", null);