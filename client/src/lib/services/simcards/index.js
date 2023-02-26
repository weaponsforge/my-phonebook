import { SimCard } from './simcards'

const SIM = new SimCard()

export const getSimCards = SIM.getSimCards.bind(SIM)
