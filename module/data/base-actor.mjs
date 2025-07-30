import HisMajestyTheWormDataModel from "./base-model.mjs";

export default class HisMajestyTheWormActorBase extends HisMajestyTheWormDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    // Reference https://github.com/asacolips-projects/boilerplate/blob/main/src/datamodels/module/data/base-actor.mjs

    // TODO: I don't think we need a name field in the template, because there's an inherent actor.name field already
    schema.name = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    schema.swords = new fields.NumberField({ ...requiredInteger, initial: 0 });
    schema.pentacles = new fields.NumberField({ ...requiredInteger, initial: 0 });
    schema.cups = new fields.NumberField({ ...requiredInteger, initial: 0 });
    schema.wands = new fields.NumberField({ ...requiredInteger, initial: 0 });

    return schema;
  }

}