import {useQuery, useMutation} from "@tanstack/react-query";
import CamerasService from "@/services/cameras.service";


export const useGetAllCameras = () => useQuery({
  queryKey: ['cameras'],
  queryFn: () => CamerasService.getAll(),
  select: ({data}) => data
});


export const useGetByIdCameras = (id: string) => useQuery({
  queryKey: ['cameras', id],
  queryFn: () => CamerasService.getById(id),
  select: ({data}) => data
});

export const useAddCartCameras = () => useMutation({
  mutationKey: ['cameras'],
  mutationFn: (id: string) => CamerasService.addCart(id)
});

export const useDeleteCartCameras = () => useMutation({
  mutationKey: ['cameras'],
  mutationFn: (id: string) => CamerasService.deleteCart(id)
});
