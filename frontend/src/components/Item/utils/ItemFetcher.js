import agent from "../../../agent";

export async function getItemAndComments(id) {
  const [item, comments] = Promise.all([
    agent.Items.get(id),
    agent.Comments.forItem(id)
  ]) 
  return [item, comments];
}
