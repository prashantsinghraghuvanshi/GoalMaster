export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your to-do list! 😀</em>
      </p>
    );
  const numItems = items.length;
  const numDone = items.filter((item) => item.done).length;
  const percentage = Math.round((numDone / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've completed all your tasks for now! 😁"
          : `🎒 You have ${numItems} tasks on your list and you already completed ${numDone} tasks! (${percentage}%). Keep Going!!🫡`}
      </em>
    </footer>
  );
}
