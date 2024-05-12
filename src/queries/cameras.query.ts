import {useQuery, useMutation} from "@tanstack/react-query";
import CamerasService from "@/services/cameras.service";


export const useGetAllCameras = () => useQuery({
  queryKey: ['cameras'],
  queryFn: () => CamerasService.getAll(),
  select: ({data}) => data
});


export const useGetByParams = (name: string, value: string) => useQuery({
  queryKey: ['cameras', {[name]: value}],
  queryFn: () => CamerasService.getByParams(name, value),
  select: ({data}) => data
});


export const useGetLimitByParams = (limit: string, name: string, value: string) => useQuery({
  queryKey: ['cameras', {[name]: value, limit}],
  queryFn: () => CamerasService.getLimitByParams(limit, name, value),
  select: ({data}) => data
});


export const useGetByIdCameras = (camerasId: string) => useQuery({
  queryKey: ['cameras', camerasId],
  queryFn: () => CamerasService.getById(camerasId),
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
