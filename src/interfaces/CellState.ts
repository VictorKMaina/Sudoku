export type CellValue = number | null

export interface CellPosition {
    row: number
    col: number
    subgrid?: number
}

export interface CellState {
    cellPosition: CellPosition
    value: CellValue
    isPrefilled: boolean
    isValid: boolean | undefined
    // notes: CellValue[]
}