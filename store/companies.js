export const state = () => {
    return {
        page: -1,
        list: []
    }
}

export const mutations = {
    ADD_PAGE_COMPANIES: (state, { page, companies }) => {
        state.page = page;
        state.list.push(...companies);
    }
}

export const actions = {
    async fetch(ctx) {
        const page = ctx.state.page + 1;
        let companies = await this.$axios.$get(`/companies?page=${page}`);
        ctx.commit('ADD_PAGE_COMPANIES', { page, companies });
        return companies.length;
    },
}