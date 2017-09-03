using System;
using System.Collections.Generic;

using AutoMapper;

namespace TestTaskShops.BLL.Util
{
    public static class MappingUtil
    {
        private static void InitializeMap<TSource, TTurget>()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<TSource, TTurget>());
        }

        public static TTurget MapInstance<TSource, TTurget>(TSource source)
        {
            InitializeMap<TSource, TTurget>();

            return Mapper.Map<TSource, TTurget>(source);
        }

        public static IEnumerable<TTurget> MapCollection<TSource, TTurget>(IEnumerable<TSource> sourceCollection)
        {
            InitializeMap<TSource, TTurget>();

            return Mapper.Map<IEnumerable<TSource>, List<TTurget>>(sourceCollection);
        }
    }
}