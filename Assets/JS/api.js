async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Nick000las/js-developer-portfolio/refs/heads/main/Portfolio/Assets/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json()
}