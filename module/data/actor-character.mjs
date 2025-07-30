import HisMajestyTheWormActorBase from "./base-actor.mjs";

export default class HisMajestyTheWormCharacter extends HisMajestyTheWormActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.kith = new fields.StringField({ required: true, blank: true });
    schema.kin = new fields.StringField({ required: true, blank: true });

    // bio
    schema.bio = new fields.SchemaField({
      backstory: new fields.StringField({ required: true, blank: true }),
      quest: new fields.StringField({ required: true, blank: true }),
      motifs: new fields.SchemaField({
        first: new fields.StringField({ required: true, blank: true }),
        second: new fields.StringField({ required: true, blank: true }),
        third: new fields.StringField({ required: true, blank: true }),
      }),
      languages: new fields.SchemaField({
        first: new fields.StringField({ required: true, blank: true }),
        second: new fields.StringField({ required: true, blank: true }),
      }),
    });
      
    // status
    schema.status = new fields.SchemaField({
      stressed: new fields.BooleanField({ required: true }),
      staggered: new fields.BooleanField({ required: true }),
      injured: new fields.BooleanField({ required: true }),
      deathsdoor: new fields.BooleanField({ required: true }),
      resolve: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 4 }),
      lore: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 4 }),
    });

    // supply resources
    schema.supplyresources = new fields.SchemaField({
      rhand: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 3 }),
      }),
      lhand: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 3 }),
      }),
      armor: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 3 }),
      }),
      helm: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 1 }),
      }),
      light: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notched: new fields.BooleanField({ required: true }),
        flickers: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0, max: 4 }),
      }),
    });

    return schema;
  }

  prepareDerivedData() {
    
  }

  getRollData() {
    return {}
  }
}