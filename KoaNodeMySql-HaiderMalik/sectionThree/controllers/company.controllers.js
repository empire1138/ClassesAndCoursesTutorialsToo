module.exports = {
    async create(ctx) {
        try {


            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.address,
                userId: ctx.state.user.userId
            })


        } catch (error) {
            ctx.throw(500, err);
        }
    },

    async find(ctx) {
        try {

            ctx.body = await ctx.db.Company.findAll({

                userId: ctx.state.user,
                include: [
                    {
                        model: ctx.db.Job
                    }
                ]

            }
            )

        }
        catch (err) {
            throw err;
        }
    },
    async findOne(ctx) {
        try {
            const company = await ctx.db.Company.findOne({
                id: ctx.params.id
            })
            if (!company) {
                ctx.throw(404, 'Company id is invalid');
            }
            ctx.body = company;
        } catch (err) {
            ctx.throw(500, err)
        }
    },
    async destroy(ctx) {
        try {
            const results = await ctx.db.Company.destroy({
                where: { id: ctx.params.id }
            })
            if (!company) {
                ctx.throw(404, 'Company id is invalid');
            }
            ctx.body = results;
        } catch (err) {
            ctx.throw(500, err)
        }
    },
    async update(ctx) {
        try {

            const results = await ctx.db.Company.update({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                addres: ctx.request.body.address
            }, {
                where: {
                    id: ctx.params.id
                }
            });

            results === 0 ? ctx.throw(500, 'invalid id provided') : ctx.body = `company is updated with id ${ctx.params.id}`;

        }
        catch (err) {
            ctx.throw(500, err)
        }
    }

}