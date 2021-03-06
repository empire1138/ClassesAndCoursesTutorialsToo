const { create } = require("./company.controllers");

module.exports = {
    async create(ctx) {
        try {
           const candidate =  ctx.db.Candidate.create({
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                email: ctx.request.body.email,
            })

            ctx.body = await ctx.db.Application.create({
                JobId: ctx.request.body.JobId,
                CandidateId: candidate.id
            })
        }
        catch (err) {
            ctx.throw(500, err);
        }
    }
}