import HisMajestyTheWormItemBase from "./base-item.mjs";

export default class HisMajestyTheWormBond extends HisMajestyTheWormItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.bondtype = new fields.StringField({ required: true, blank: true });
    schema.charged = new fields.BooleanField({ initial: false });

    return schema;
  }
}