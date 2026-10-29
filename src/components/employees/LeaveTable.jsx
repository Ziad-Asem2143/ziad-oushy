import { CalendarOff } from 'lucide-react'
import { Badge, EmptyState } from '../common'
import { leaveStatus } from '../../utils/status'
import { formatDate } from '../../utils/date'

// requests: [{ id, type, startDate, endDate, requestDate, status }]
export default function LeaveTable({ requests }) {
  if (requests.length === 0) {
    return <EmptyState icon={CalendarOff} title="No leave requests" description="Your leave requests will appear here." />
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-ink-soft">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">Leave Type</th>
            <th scope="col" className="px-5 py-3 font-medium">Start Date</th>
            <th scope="col" className="px-5 py-3 font-medium">End Date</th>
            <th scope="col" className="px-5 py-3 font-medium">Request Date</th>
            <th scope="col" className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {requests.map((r) => (
            <tr key={r.id} className="hover:bg-gray-50">
              <td className="px-5 py-3.5 font-medium text-ink">{r.type}</td>
              <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">{formatDate(r.startDate)}</td>
              <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">{formatDate(r.endDate)}</td>
              <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">{formatDate(r.requestDate)}</td>
              <td className="px-5 py-3.5">
                <Badge variant={leaveStatus[r.status].variant}>{leaveStatus[r.status].label}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
