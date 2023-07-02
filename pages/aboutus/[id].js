import { useRouter } from "next/router";
import { Fragment } from "react";

export default function DetailsPage() {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const userId = router.query.id;

  const result = details.find((current) => current.id == userId);
  let printUser=(<h1>User does not exist</h1>);
  if (result) {
    printUser = (
      <div>
        <h3>{result.name}</h3>
        <b>{result.role}</b>
      </div>
    );
  }

  return (
    <Fragment>
      <h2>User Detail Page</h2>;
      {printUser}
    </Fragment>
  );
}
