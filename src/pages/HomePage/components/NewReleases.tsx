import { Typography, Grid } from '@mui/material'
import useGetNewReleases from '../../../hooks/useGetNewRelease';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import Card from '../../../common/components/Card';

const NewReleases = () => {
    const { data, error, isLoading } = useGetNewReleases();
    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <ErrorMessage errorMessage={error.message} />
    }
    return (
        <div>
            <Typography variant="h1" paddingTop="8px">New Released Albums</Typography>
            {data && data.albums.items.length > 0 ? (
                <Grid container spacing={2}>
                    {data.albums.items.map((album) => (
                        <Grid size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
                            <Card
                                image={album.images[0].url}
                                name={album.name}
                                artistName={album.artists
                                    .map((artist) => artist.name)
                                    .join(", ")} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h2">No Data</Typography>
            )}
        </div>
    )
}

export default NewReleases
