import { useState } from 'react'
import { CheckCircle2, Clock, Plus, XCircle } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { Button } from '../../components/common'
import { SectionCard, StatCard } from '../../components/dashboard'
import { LeaveRequestModal, LeaveTable } from '../../components/employees'
import { leaveRequests as initialRequests } from '../../data/employeeLeave'
import { daysFromNow } from '../../utils/date'

export default function LeaveRequests() {
  const [requests, setRequests] = useState(initialRequests)
  const [open, setOpen] = useState(false)

  const count = (status) => requests.filter((r) => r.status === status).length

  // Mock only: adds the request to local state (no backend). New requests start as pending.
  const addRequest = (data) => {
    setRequests((list) => [
      { id: Date.now(), ...data, requestDate: daysFromNow(0), status: 'pending' },
      ...list,
    ])
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leave Requests"
        description="Submit and track your leave requests."
        actions={
          <Button icon={Plus} onClick={() => setOpen(true)}>
            Request Leave
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Pending" value={count('pending')} icon={Clock} tone="amber" />
        <StatCard label="Approved" value={count('approved')} icon={CheckCircle2} tone="green" />
        <StatCard label="Rejected" value={count('rejected')} icon={XCircle} tone="red" />
      </div>

      <SectionCard title="My Requests">
        <LeaveTable requests={requests} />
      </SectionCard>

      <LeaveRequestModal open={open} onClose={() => setOpen(false)} onSubmit={addRequest} />
    </div>
  )
}
