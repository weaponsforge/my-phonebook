import FirestoreUtil from '@/lib/utils/firebase/firestoreutil'

export const _SimCard = {
  SIMCARDS: 'simcards'
}

export class SimCard extends FirestoreUtil {
  async getSimCards () {
    return await this.getCollectionData(_SimCard.SIMCARDS, 'id')
  }
}
