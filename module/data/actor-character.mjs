import HisMajestyTheWormActorBase from "./base-actor.mjs";

export default class HisMajestyTheWormCharacter extends HisMajestyTheWormActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.kith = new fields.StringField({ required: true, blank: true });
    schema.kin = new fields.StringField({ required: true, blank: true });

    // bio
    schema.bio.backstory = new fields.StringField({ required: true, blank: true });
    schema.bio.quest = new fields.StringField({ required: true, blank: true });
    ['first', 'second', 'third'].forEach((pos) => {
      schema.bio.motifs[pos] = new fields.StringField({ required: true, blank: true });
    });
    ['first', 'second'].forEach((pos) => {
      schema.bio.languages[pos] = new fields.StringField({ required: true, blank: true });
    });

    // status
    ['stressed', 'staggered', 'injured', 'deathsdoor'].forEach((type) => {
      schema.status[type] = new fields.BooleanField({ required: true });
    });
    ['resolve', 'lore'].forEach((type) => {
      schema.status[type] = new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 4 });
    });

    // supply resources
    ['rhand', 'lhand', 'armor'].forEach((type) => {
      schema.supplyresources[type] = fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 3 }),
      });
    });
    schema.supplyresources.helm = fields.SchemaField({
      inslot: new fields.StringField({ required: true, blank: true }),
      notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 1 }),
    });
    schema.supplyresources.light = fields.SchemaField({
      inslot: new fields.StringField({ required: true, blank: true }),
      notched: new fields.BooleanField({ required: true }),
      flickers: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 4 }),
    });

    return schema;
  }

  prepareDerivedData() {
    
  }

  getRollData() {
    return {}
  }
}