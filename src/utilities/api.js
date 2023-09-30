export const getHeroList = async () => {
    const url = `${process.env.BASE_URL}/api/HeroList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export const getBrandList = async () => {
    const url = `${process.env.BASE_URL}/api/BrandList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export const getWorkList = async () => {
    const url = `${process.env.BASE_URL}/api/WorkList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export const getStatList = async () => {
    const url = `${process.env.BASE_URL}/api/StatList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}


export const getFeaturedProject = async () => {
    const url = `${process.env.BASE_URL}/api/FeaturedProject`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export const getAllProject = async () => {
    const url = `${process.env.BASE_URL}/api/AllProject`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}


export const getTeamList = async () => {
    const url = `${process.env.BASE_URL}/api/TeamList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}


export const getServiceList = async () => {
    const url = `${process.env.BASE_URL}/api/AllService`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}


export const getTestimonialList = async () => {
    const url = `${process.env.BASE_URL}/api/TestimonialList`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

