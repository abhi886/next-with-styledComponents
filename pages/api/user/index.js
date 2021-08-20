import { people } from "../../../src/data/user";

export default function handler(req, res) {
  res.status(200).json(people);
}
