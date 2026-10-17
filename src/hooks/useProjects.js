import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProject, fetchProjects } from "../api/projects";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

export function useProject(id) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => fetchProject(id),
    // Se la lista è già in memoria, la pagina parte subito con quel progetto
    initialData: () =>
      queryClient
        .getQueryData(["projects"])
        ?.find((project) => project.id === id),
    initialDataUpdatedAt: () =>
      queryClient.getQueryState(["projects"])?.dataUpdatedAt,
  });
}
