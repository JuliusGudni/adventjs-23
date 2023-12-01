function findFirstRepeated(gifts: number[]) {
    const id = gifts.filter((v, i) => gifts.indexOf(v) !== i)
    return id.length > 0 ? id[0] : -1
}