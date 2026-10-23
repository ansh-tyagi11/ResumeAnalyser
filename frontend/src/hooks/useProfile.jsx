import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function useProfile() {

    const QueryKey = "profile";
    const queryClient = useQueryClient();

    const fetchProfile = async () => {
        const response = await fetch('http://localhost:3000/api/profile/profile', {
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error("Failed to fetch profile");
        }

        const data = await response.json();

        return data;
    }

    const {
        data: profile,
        isPending,
        isError,
    } = useQuery({
        queryKey: [QueryKey],
        queryFn: fetchProfile
    });

    const profileUser = profile?.user;

    const updateProfile = async (data) => {
        const response = await fetch('http://localhost:3000/api/profile/profile-update', {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to update profile");
        }
    }

    const {
        mutate,
        isPending: isUpdating,
        isError: isUpdateError,
        isSuccess,
    } = useMutation({
        mutationFn: updateProfile,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QueryKey],
            });
        },
    });

    return { profileUser, isPending, isError, updateProfile: mutate, isUpdating, isUpdateError, isSuccess };
}
