class ResourceProceessor {
    constructor(name, monthlyProcessing){
        this.name = name 
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProceessor.calculateProcessHours(500, 6)

console.log(totalProcessing)

