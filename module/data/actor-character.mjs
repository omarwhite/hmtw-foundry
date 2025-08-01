import HisMajestyTheWormActorBase from "./base-actor.mjs";

export default class HisMajestyTheWormCharacter extends HisMajestyTheWormActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
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
      stressed: new fields.BooleanField({ initial: false }),
      staggered: new fields.BooleanField({ initial: false }),
      injured: new fields.BooleanField({ initial: false }),
      deathsdoor: new fields.BooleanField({ initial: false }),
      resolve: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 4 }),
      lore: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 4 }),
    });

    // supply resources
    schema.supplyresources = new fields.SchemaField({
      rhand: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 3 }),
      }),
      lhand: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 3 }),
      }),
      armor: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 3 }),
      }),
      helm: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notches: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 1 }),
      }),
      light: new fields.SchemaField({
        inslot: new fields.StringField({ required: true, blank: true }),
        notched: new fields.BooleanField({ initial: false }),
        flickers: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 4 }),
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