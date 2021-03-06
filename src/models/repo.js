import { Schema } from 'mongoose';
import mongo from 'db/mongo';

const repoSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  full_name: String,
  ownerId: Number,
  ownerName: String,
  private: Boolean,
  html_url: String,
  description: String,
  created_at: String,
  updated_at: String,
  pushed_at: String,
  homepage: String,
  language: String,
});

const Repo = mongo.model('repo', repoSchema);

export default Repo;
