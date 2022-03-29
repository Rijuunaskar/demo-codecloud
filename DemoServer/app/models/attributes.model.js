module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        properties: Object
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Attributes = mongoose.model("attributes", schema);
    return Attributes;
  };
  