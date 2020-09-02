export const state = () => {
    return {
        page: -1,
        items: [],
        filter: '',
    }
}

export const getters = {
    filtered: (state) => {
        var result = Object.values(state.items).flat();

        // i'm sorry. for now will do.
        if (state.filter)
            result = result.filter(i => 
                i.position.toLowerCase().indexOf(state.filter.toLowerCase()) > -1 || 
                i.companyName.toLowerCase().indexOf(state.filter.toLowerCase()) > -1 || 
                i.description.toLowerCase().indexOf(state.filter.toLowerCase()) > -1 ||
                (i.location && i.location.toLowerCase().indexOf(state.filter.toLowerCase()) > -1));

        return result;
    }
}

export const mutations = {
    SET_FILTER: (state, value) => state.filter = value,
    SET_PAGE_JOBS: (state, { page, jobs }) => {
        state.page = page;
        state.items.push(...jobs);
    }
}

export const actions = {
    async fetch(ctx) {
        const page = ctx.state.page + 1;
        let jobs = await this.$axios.$get(`/jobs?page=${page}`);
        ctx.commit('SET_PAGE_JOBS', { page, jobs });
        return jobs.length;
    },
}