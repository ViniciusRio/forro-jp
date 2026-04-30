import type { Agenda } from '../types'

const AGENDA_URL = '/agenda.json'

export const agendaService = {
  async fetchAgenda(): Promise<Agenda> {
    const response = await fetch(AGENDA_URL)

    if (!response.ok) {
      throw new Error(`Failed to fetch agenda: ${response.status}`)
    }

    return response.json()
  },
}
