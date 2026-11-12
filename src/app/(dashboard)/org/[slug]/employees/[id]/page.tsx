import { Suspense } from "react";

import { EmployeeDetail, EmployeeDetailSkeleton } from "@/components/employees/employee-detail";

export default function EmployeePage({ params }: PageProps<"/org/[slug]/employees/[id]">) {
  return (
    <Suspense fallback={<EmployeeDetailSkeleton />}>
      {params.then(({ id }) => (
        <EmployeeDetail employeeId={decodeURIComponent(id)} />
      ))}
    </Suspense>
  );
}
