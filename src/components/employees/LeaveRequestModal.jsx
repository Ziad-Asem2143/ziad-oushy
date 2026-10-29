import { useState } from 'react'
import { Button, Input, Modal } from '../common'
import { leaveTypes } from '../../data/employeeLeave'
import { daysFromNow } from '../../utils/date'

const emptyForm = { type: leaveTypes[0], startDate: '', endDate: '', reason: '' }

// onSubmit receives { type, startDate, endDate, reason }
export default function LeaveRequestModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const today = daysFromNow(0)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const close = () => {
    setForm(emptyForm)
    setErrors({})
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.startDate) next.startDate = 'Choose a start date.'
    if (!form.endDate) next.endDate = 'Choose an end date.'
    if (form.startDate && form.endDate && form.endDate < form.startDate) {
      next.endDate = 'End date must be on or after the start date.'
    }
    if (!form.reason.trim()) next.reason = 'Please add a short reason.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    onSubmit({ ...form, reason: form.reason.trim() })
    close()
  }

  return (
    <Modal
      open={open}
      onClose={close}
      title="Request Leave"
      footer={
        <>
          <Button variant="outline" onClick={close}>Cancel</Button>
          <Button type="submit" form="leave-request-form">Submit Request</Button>
        </>
      }
    >
      <form id="leave-request-form" onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="leave-type" className="mb-1.5 block text-sm font-medium text-ink">Leave type</label>
          <select
            id="leave-type"
            value={form.type}
            onChange={update('type')}
            className="h-10 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            {leaveTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Start date" type="date" min={today} value={form.startDate} onChange={update('startDate')} error={errors.startDate} />
          <Input label="End date" type="date" min={form.startDate || today} value={form.endDate} onChange={update('endDate')} error={errors.endDate} />
        </div>

        <div>
          <label htmlFor="leave-reason" className="mb-1.5 block text-sm font-medium text-ink">Reason</label>
          <textarea
            id="leave-reason"
            rows={3}
            value={form.reason}
            onChange={update('reason')}
            placeholder="Briefly explain your request"
            aria-invalid={errors.reason ? true : undefined}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.reason
                ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                : 'border-line focus:border-primary-500 focus:ring-primary-100'
            }`}
          />
          {errors.reason && <p className="mt-1 text-xs text-red-600">{errors.reason}</p>}
        </div>
      </form>
    </Modal>
  )
}
