import { useSyncGlobalVariable } from "@/lib/hooks/useSync"
import { useDeferredValue, useEffect, useState } from "react"
import { ContactCardsGroup } from "../contactsCardContainer/contactCardGroup"

const { Box } = require("@mui/material")

export const SearchResultsContainer = ({ state }) => {
    const [search, setSearch] = useSyncGlobalVariable('search')
    const deferredSearch = useDeferredValue(search)

    const filterContacts = (searchText) => {
        const filteredContactsByField = [...state.contacts].reduce((prev, curr) => {
            for (let [key, value] of Object.entries(curr)) {
                if (new RegExp(String.raw`${searchText}`, 'i').test(value)) {
                    if (!prev[key]) {
                        prev[key] = []
                    }
                    prev[key] = [...prev[key], curr]
                }
            }
            return prev
        }, {})
        return filteredContactsByField
    }

    const searchResults = filterContacts(deferredSearch)
    const searchResultsArr = Object.entries(searchResults)


    return (
        <Box sx={{
            width: '100%',
            height: '100%',
        }}>
            {
                searchResultsArr.map((el, index) => {
                    return (
                        // <div key={index}>{el[0]}</div>
                        <ContactCardsGroup key={index} content={{ 'group': el[0], 'contacts': el[1] }} />
                    )
                })
            }
        </Box>
    )
}