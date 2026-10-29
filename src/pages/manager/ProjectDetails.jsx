import { useParams } from 'react-router-dom'
import { PlaceholderPage } from '../../components/common'

export default function ProjectDetails() {
  const params = useParams()
  return <PlaceholderPage title="Project Details" path="/manager/projects/:id" params={params} />
}
