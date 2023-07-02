import Link from "next/link";

export default function aboutus() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const users = details.map((current) => (
    <li>
      <Link href={`/aboutus/${current.id}`}>
        <h3>{current.name}</h3>
      </Link>
      <hr></hr>
    </li>
  ));
  return (
    <div>
      <h3>about us </h3>

      <h4>Employee List (click on any one of them to know additional details)</h4>
      {users}
    </div>
  );
}
